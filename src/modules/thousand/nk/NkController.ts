import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nks")
export default class NkController {
  @operation({
    summary: "Get Nks",
  })
  @get()
  static getNks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nk",
  })
  @post("{id}")
  static createNk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
