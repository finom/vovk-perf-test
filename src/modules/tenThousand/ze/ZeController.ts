import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zes")
export default class ZeController {
  @operation({
    summary: "Get Zes",
  })
  @get()
  static getZes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ze",
  })
  @post("{id}")
  static createZe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
