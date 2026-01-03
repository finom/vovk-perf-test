import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkbs")
export default class NkbController {
  @operation({
    summary: "Get Nkbs",
  })
  @get()
  static getNkbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkb",
  })
  @post("{id}")
  static createNkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
