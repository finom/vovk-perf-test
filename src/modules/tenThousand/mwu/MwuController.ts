import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwus")
export default class MwuController {
  @operation({
    summary: "Get Mwus",
  })
  @get()
  static getMwus = procedure({
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
