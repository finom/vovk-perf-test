import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsc")
export default class FscController {
  @operation({
    summary: "Get Fsc",
  })
  @get()
  static getFsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsc",
  })
  @post("{id}")
  static createFsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
