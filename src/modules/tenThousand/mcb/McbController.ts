import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcb")
export default class McbController {
  @operation({
    summary: "Get Mcb",
  })
  @get()
  static getMcb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcb",
  })
  @post("{id}")
  static createMcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
