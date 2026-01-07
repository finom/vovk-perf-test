import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myz")
export default class MyzController {
  @operation({
    summary: "Get Myz",
  })
  @get()
  static getMyz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myz",
  })
  @post("{id}")
  static createMyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
