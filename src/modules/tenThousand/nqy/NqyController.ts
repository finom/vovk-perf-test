import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqy")
export default class NqyController {
  @operation({
    summary: "Get Nqy",
  })
  @get()
  static getNqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqy",
  })
  @post("{id}")
  static createNqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
