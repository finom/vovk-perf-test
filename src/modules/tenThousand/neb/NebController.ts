import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neb")
export default class NebController {
  @operation({
    summary: "Get Neb",
  })
  @get()
  static getNeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Neb",
  })
  @post("{id}")
  static createNeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
