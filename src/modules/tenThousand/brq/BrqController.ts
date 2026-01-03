import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brqs")
export default class BrqController {
  @operation({
    summary: "Get Brqs",
  })
  @get()
  static getBrqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brq",
  })
  @post("{id}")
  static createBrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
