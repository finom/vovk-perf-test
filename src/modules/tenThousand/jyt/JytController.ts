import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyts")
export default class JytController {
  @operation({
    summary: "Get Jyts",
  })
  @get()
  static getJyts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyt",
  })
  @post("{id}")
  static createJyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
