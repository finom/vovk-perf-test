import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeh")
export default class AehController {
  @operation({
    summary: "Get Aeh",
  })
  @get()
  static getAeh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aeh",
  })
  @post("{id}")
  static createAeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
