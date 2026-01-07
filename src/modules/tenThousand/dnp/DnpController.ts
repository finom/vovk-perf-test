import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnp")
export default class DnpController {
  @operation({
    summary: "Get Dnp",
  })
  @get()
  static getDnp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnp",
  })
  @post("{id}")
  static createDnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
