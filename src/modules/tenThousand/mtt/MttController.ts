import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtts")
export default class MttController {
  @operation({
    summary: "Get Mtts",
  })
  @get()
  static getMtts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtt",
  })
  @post("{id}")
  static createMtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
