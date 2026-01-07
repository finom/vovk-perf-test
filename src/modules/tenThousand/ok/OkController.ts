import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ok")
export default class OkController {
  @operation({
    summary: "Get Ok",
  })
  @get()
  static getOk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ok",
  })
  @post("{id}")
  static createOk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
