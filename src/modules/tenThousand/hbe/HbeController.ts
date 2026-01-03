import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbes")
export default class HbeController {
  @operation({
    summary: "Get Hbes",
  })
  @get()
  static getHbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbe",
  })
  @post("{id}")
  static createHbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
