import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcw")
export default class McwController {
  @operation({
    summary: "Get Mcw",
  })
  @get()
  static getMcw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcw",
  })
  @post("{id}")
  static createMcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
