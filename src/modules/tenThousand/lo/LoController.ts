import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lo")
export default class LoController {
  @operation({
    summary: "Get Lo",
  })
  @get()
  static getLo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lo",
  })
  @post("{id}")
  static createLo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
