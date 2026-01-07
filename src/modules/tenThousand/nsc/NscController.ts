import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsc")
export default class NscController {
  @operation({
    summary: "Get Nsc",
  })
  @get()
  static getNsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsc",
  })
  @post("{id}")
  static createNsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
