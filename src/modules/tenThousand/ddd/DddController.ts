import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddds")
export default class DddController {
  @operation({
    summary: "Get Ddds",
  })
  @get()
  static getDdds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddd",
  })
  @post("{id}")
  static createDdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
