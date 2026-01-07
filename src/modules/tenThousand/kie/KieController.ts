import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kie")
export default class KieController {
  @operation({
    summary: "Get Kie",
  })
  @get()
  static getKie = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kie",
  })
  @post("{id}")
  static createKie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
