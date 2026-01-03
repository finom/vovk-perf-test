import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ates")
export default class AteController {
  @operation({
    summary: "Get Ates",
  })
  @get()
  static getAtes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ate",
  })
  @post("{id}")
  static createAte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
