import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nep")
export default class NepController {
  @operation({
    summary: "Get Nep",
  })
  @get()
  static getNep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nep",
  })
  @post("{id}")
  static createNep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
