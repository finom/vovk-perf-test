import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqd")
export default class NqdController {
  @operation({
    summary: "Get Nqd",
  })
  @get()
  static getNqd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqd",
  })
  @post("{id}")
  static createNqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
