import { procedure, prefix, get, post, operation } from "vovk";

@prefix("phs")
export default class PhController {
  @operation({
    summary: "Get Phs",
  })
  @get()
  static getPhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ph",
  })
  @post("{id}")
  static createPh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
