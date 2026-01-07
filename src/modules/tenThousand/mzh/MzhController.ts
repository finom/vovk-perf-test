import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzh")
export default class MzhController {
  @operation({
    summary: "Get Mzh",
  })
  @get()
  static getMzh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzh",
  })
  @post("{id}")
  static createMzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
