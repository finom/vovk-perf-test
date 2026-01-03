import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgqs")
export default class FgqController {
  @operation({
    summary: "Get Fgqs",
  })
  @get()
  static getFgqs = procedure({
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
