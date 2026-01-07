import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwu")
export default class MwuController {
  @operation({
    summary: "Get Mwu",
  })
  @get()
  static getMwu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwu",
  })
  @post("{id}")
  static createMwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
