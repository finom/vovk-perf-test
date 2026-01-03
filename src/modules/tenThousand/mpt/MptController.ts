import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpts")
export default class MptController {
  @operation({
    summary: "Get Mpts",
  })
  @get()
  static getMpts = procedure({
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
