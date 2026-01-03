import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftis")
export default class FtiController {
  @operation({
    summary: "Get Ftis",
  })
  @get()
  static getFtis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fti",
  })
  @post("{id}")
  static createFti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
