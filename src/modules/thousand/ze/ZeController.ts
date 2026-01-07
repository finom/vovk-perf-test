import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ze")
export default class ZeController {
  @operation({
    summary: "Get Ze",
  })
  @get()
  static getZe = procedure({
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
