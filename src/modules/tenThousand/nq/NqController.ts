import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nq")
export default class NqController {
  @operation({
    summary: "Get Nq",
  })
  @get()
  static getNq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nq",
  })
  @post("{id}")
  static createNq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
