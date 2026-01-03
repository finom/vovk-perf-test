import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcxes")
export default class McxController {
  @operation({
    summary: "Get Mcxes",
  })
  @get()
  static getMcxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcx",
  })
  @post("{id}")
  static createMcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
