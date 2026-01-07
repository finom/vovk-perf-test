import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwo")
export default class MwoController {
  @operation({
    summary: "Get Mwo",
  })
  @get()
  static getMwo = procedure({
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
