import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsl")
export default class NslController {
  @operation({
    summary: "Get Nsl",
  })
  @get()
  static getNsl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsl",
  })
  @post("{id}")
  static createNsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
