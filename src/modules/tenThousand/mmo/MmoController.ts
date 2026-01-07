import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmo")
export default class MmoController {
  @operation({
    summary: "Get Mmo",
  })
  @get()
  static getMmo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmo",
  })
  @post("{id}")
  static createMmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
