import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkb")
export default class DkbController {
  @operation({
    summary: "Get Dkb",
  })
  @get()
  static getDkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkb",
  })
  @post("{id}")
  static createDkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
