import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fti")
export default class FtiController {
  @operation({
    summary: "Get Fti",
  })
  @get()
  static getFti = procedure({
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
