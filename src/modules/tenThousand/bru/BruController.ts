import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brus")
export default class BruController {
  @operation({
    summary: "Get Brus",
  })
  @get()
  static getBrus = procedure({
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
