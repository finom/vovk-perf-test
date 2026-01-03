import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtis")
export default class DtiController {
  @operation({
    summary: "Get Dtis",
  })
  @get()
  static getDtis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dti",
  })
  @post("{id}")
  static createDti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
