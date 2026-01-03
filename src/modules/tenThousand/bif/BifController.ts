import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bifs")
export default class BifController {
  @operation({
    summary: "Get Bifs",
  })
  @get()
  static getBifs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bif",
  })
  @post("{id}")
  static createBif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
