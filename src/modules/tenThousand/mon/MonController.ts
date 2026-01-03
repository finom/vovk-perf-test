import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mons")
export default class MonController {
  @operation({
    summary: "Get Mons",
  })
  @get()
  static getMons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mon",
  })
  @post("{id}")
  static createMon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
