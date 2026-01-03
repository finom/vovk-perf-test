import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuys")
export default class FuyController {
  @operation({
    summary: "Get Fuys",
  })
  @get()
  static getFuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuy",
  })
  @post("{id}")
  static createFuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
