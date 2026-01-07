import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpt")
export default class MptController {
  @operation({
    summary: "Get Mpt",
  })
  @get()
  static getMpt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpt",
  })
  @post("{id}")
  static createMpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
