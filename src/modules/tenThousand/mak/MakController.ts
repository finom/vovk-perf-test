import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mak")
export default class MakController {
  @operation({
    summary: "Get Mak",
  })
  @get()
  static getMak = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mak",
  })
  @post("{id}")
  static createMak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
