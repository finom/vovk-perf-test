import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mohs")
export default class MohController {
  @operation({
    summary: "Get Mohs",
  })
  @get()
  static getMohs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moh",
  })
  @post("{id}")
  static createMoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
