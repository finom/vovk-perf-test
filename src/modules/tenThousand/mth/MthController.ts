import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mth")
export default class MthController {
  @operation({
    summary: "Get Mth",
  })
  @get()
  static getMth = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mth",
  })
  @post("{id}")
  static createMth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
