import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acjs")
export default class AcjController {
  @operation({
    summary: "Get Acjs",
  })
  @get()
  static getAcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acj",
  })
  @post("{id}")
  static createAcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
