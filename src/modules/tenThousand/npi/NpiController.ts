import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npi")
export default class NpiController {
  @operation({
    summary: "Get Npi",
  })
  @get()
  static getNpi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npi",
  })
  @post("{id}")
  static createNpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
