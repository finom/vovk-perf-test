import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meks")
export default class MekController {
  @operation({
    summary: "Get Meks",
  })
  @get()
  static getMeks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mek",
  })
  @post("{id}")
  static createMek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
