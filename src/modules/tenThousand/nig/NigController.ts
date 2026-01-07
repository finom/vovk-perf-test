import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nig")
export default class NigController {
  @operation({
    summary: "Get Nig",
  })
  @get()
  static getNig = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nig",
  })
  @post("{id}")
  static createNig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
