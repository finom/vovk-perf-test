import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnps")
export default class MnpController {
  @operation({
    summary: "Get Mnps",
  })
  @get()
  static getMnps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnp",
  })
  @post("{id}")
  static createMnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
