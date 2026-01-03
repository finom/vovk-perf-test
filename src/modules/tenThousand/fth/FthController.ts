import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fths")
export default class FthController {
  @operation({
    summary: "Get Fths",
  })
  @get()
  static getFths = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fth",
  })
  @post("{id}")
  static createFth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
