import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnps")
export default class DnpController {
  @operation({
    summary: "Get Dnps",
  })
  @get()
  static getDnps = procedure({
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
