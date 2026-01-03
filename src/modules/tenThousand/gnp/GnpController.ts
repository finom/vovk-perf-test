import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnps")
export default class GnpController {
  @operation({
    summary: "Get Gnps",
  })
  @get()
  static getGnps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnp",
  })
  @post("{id}")
  static createGnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
