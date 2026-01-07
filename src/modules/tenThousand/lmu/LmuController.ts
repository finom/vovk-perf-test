import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmu")
export default class LmuController {
  @operation({
    summary: "Get Lmu",
  })
  @get()
  static getLmu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmu",
  })
  @post("{id}")
  static createLmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
