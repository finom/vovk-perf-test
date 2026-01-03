import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxxes")
export default class MxxController {
  @operation({
    summary: "Get Mxxes",
  })
  @get()
  static getMxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxx",
  })
  @post("{id}")
  static createMxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
