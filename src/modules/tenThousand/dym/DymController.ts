import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyms")
export default class DymController {
  @operation({
    summary: "Get Dyms",
  })
  @get()
  static getDyms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dym",
  })
  @post("{id}")
  static createDym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
