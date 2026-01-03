import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lphs")
export default class LphController {
  @operation({
    summary: "Get Lphs",
  })
  @get()
  static getLphs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lph",
  })
  @post("{id}")
  static createLph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
