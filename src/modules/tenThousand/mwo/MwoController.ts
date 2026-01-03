import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwos")
export default class MwoController {
  @operation({
    summary: "Get Mwos",
  })
  @get()
  static getMwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwo",
  })
  @post("{id}")
  static createMwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
