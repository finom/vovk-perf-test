import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bru")
export default class BruController {
  @operation({
    summary: "Get Bru",
  })
  @get()
  static getBru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bru",
  })
  @post("{id}")
  static createBru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
