import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lda")
export default class LdaController {
  @operation({
    summary: "Get Lda",
  })
  @get()
  static getLda = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lda",
  })
  @post("{id}")
  static createLda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
