import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffr")
export default class FfrController {
  @operation({
    summary: "Get Ffr",
  })
  @get()
  static getFfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffr",
  })
  @post("{id}")
  static createFfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
