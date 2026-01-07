import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtu")
export default class MtuController {
  @operation({
    summary: "Get Mtu",
  })
  @get()
  static getMtu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtu",
  })
  @post("{id}")
  static createMtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
