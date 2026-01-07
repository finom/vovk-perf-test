import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crb")
export default class CrbController {
  @operation({
    summary: "Get Crb",
  })
  @get()
  static getCrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crb",
  })
  @post("{id}")
  static createCrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
