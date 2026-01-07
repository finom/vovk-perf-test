import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiy")
export default class HiyController {
  @operation({
    summary: "Get Hiy",
  })
  @get()
  static getHiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hiy",
  })
  @post("{id}")
  static createHiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
