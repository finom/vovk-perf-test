import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iau")
export default class IauController {
  @operation({
    summary: "Get Iau",
  })
  @get()
  static getIau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iau",
  })
  @post("{id}")
  static createIau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
