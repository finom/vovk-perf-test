import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcd")
export default class McdController {
  @operation({
    summary: "Get Mcd",
  })
  @get()
  static getMcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcd",
  })
  @post("{id}")
  static createMcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
