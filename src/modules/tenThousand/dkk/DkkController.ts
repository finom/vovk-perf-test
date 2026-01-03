import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkks")
export default class DkkController {
  @operation({
    summary: "Get Dkks",
  })
  @get()
  static getDkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkk",
  })
  @post("{id}")
  static createDkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
