import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mews")
export default class MewController {
  @operation({
    summary: "Get Mews",
  })
  @get()
  static getMews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mew",
  })
  @post("{id}")
  static createMew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
