import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mll")
export default class MllController {
  @operation({
    summary: "Get Mll",
  })
  @get()
  static getMll = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mll",
  })
  @post("{id}")
  static createMll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
