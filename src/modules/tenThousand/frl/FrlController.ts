import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frls")
export default class FrlController {
  @operation({
    summary: "Get Frls",
  })
  @get()
  static getFrls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frl",
  })
  @post("{id}")
  static createFrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
