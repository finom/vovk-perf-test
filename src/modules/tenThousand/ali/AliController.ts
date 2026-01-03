import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alis")
export default class AliController {
  @operation({
    summary: "Get Alis",
  })
  @get()
  static getAlis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ali",
  })
  @post("{id}")
  static createAli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
