import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnms")
export default class DnmController {
  @operation({
    summary: "Get Dnms",
  })
  @get()
  static getDnms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnm",
  })
  @post("{id}")
  static createDnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
