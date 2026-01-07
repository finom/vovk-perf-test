import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fke")
export default class FkeController {
  @operation({
    summary: "Get Fke",
  })
  @get()
  static getFke = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fke",
  })
  @post("{id}")
  static createFke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
