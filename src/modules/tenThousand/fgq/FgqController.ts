import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgq")
export default class FgqController {
  @operation({
    summary: "Get Fgq",
  })
  @get()
  static getFgq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgq",
  })
  @post("{id}")
  static createFgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
