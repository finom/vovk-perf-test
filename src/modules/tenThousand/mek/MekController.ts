import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mek")
export default class MekController {
  @operation({
    summary: "Get Mek",
  })
  @get()
  static getMek = procedure({
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
