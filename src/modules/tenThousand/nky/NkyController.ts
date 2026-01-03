import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkies")
export default class NkyController {
  @operation({
    summary: "Get Nkies",
  })
  @get()
  static getNkies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nky",
  })
  @post("{id}")
  static createNky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
