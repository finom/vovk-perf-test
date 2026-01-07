import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ot")
export default class OtController {
  @operation({
    summary: "Get Ot",
  })
  @get()
  static getOt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ot",
  })
  @post("{id}")
  static createOt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
