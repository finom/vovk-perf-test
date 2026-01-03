import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkxes")
export default class GkxController {
  @operation({
    summary: "Get Gkxes",
  })
  @get()
  static getGkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkx",
  })
  @post("{id}")
  static createGkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
