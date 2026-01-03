import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lns")
export default class LnsController {
  @operation({
    summary: "Get Lns",
  })
  @get()
  static getLns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lns",
  })
  @post("{id}")
  static createLns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
