import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuy")
export default class FuyController {
  @operation({
    summary: "Get Fuy",
  })
  @get()
  static getFuy = procedure({
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
