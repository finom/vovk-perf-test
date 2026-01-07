import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feh")
export default class FehController {
  @operation({
    summary: "Get Feh",
  })
  @get()
  static getFeh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Feh",
  })
  @post("{id}")
  static createFeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
