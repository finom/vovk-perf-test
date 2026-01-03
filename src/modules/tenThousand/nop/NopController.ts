import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nops")
export default class NopController {
  @operation({
    summary: "Get Nops",
  })
  @get()
  static getNops = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nop",
  })
  @post("{id}")
  static createNop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
