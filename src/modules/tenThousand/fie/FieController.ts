import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fies")
export default class FieController {
  @operation({
    summary: "Get Fies",
  })
  @get()
  static getFies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fie",
  })
  @post("{id}")
  static createFie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
