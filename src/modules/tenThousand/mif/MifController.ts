import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mifs")
export default class MifController {
  @operation({
    summary: "Get Mifs",
  })
  @get()
  static getMifs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mif",
  })
  @post("{id}")
  static createMif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
