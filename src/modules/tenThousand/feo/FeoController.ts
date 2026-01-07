import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feo")
export default class FeoController {
  @operation({
    summary: "Get Feo",
  })
  @get()
  static getFeo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Feo",
  })
  @post("{id}")
  static createFeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
