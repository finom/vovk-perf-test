import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mids")
export default class MidController {
  @operation({
    summary: "Get Mids",
  })
  @get()
  static getMids = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mid",
  })
  @post("{id}")
  static createMid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
