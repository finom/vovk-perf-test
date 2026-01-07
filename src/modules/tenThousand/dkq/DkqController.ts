import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkq")
export default class DkqController {
  @operation({
    summary: "Get Dkq",
  })
  @get()
  static getDkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkq",
  })
  @post("{id}")
  static createDkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
