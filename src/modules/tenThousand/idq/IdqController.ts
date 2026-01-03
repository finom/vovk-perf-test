import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idqs")
export default class IdqController {
  @operation({
    summary: "Get Idqs",
  })
  @get()
  static getIdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idq",
  })
  @post("{id}")
  static createIdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
