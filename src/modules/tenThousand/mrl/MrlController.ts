import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrl")
export default class MrlController {
  @operation({
    summary: "Get Mrl",
  })
  @get()
  static getMrl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrl",
  })
  @post("{id}")
  static createMrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
