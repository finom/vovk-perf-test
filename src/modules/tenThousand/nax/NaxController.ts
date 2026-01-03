import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naxes")
export default class NaxController {
  @operation({
    summary: "Get Naxes",
  })
  @get()
  static getNaxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nax",
  })
  @post("{id}")
  static createNax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
