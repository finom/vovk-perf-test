import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnxes")
export default class GnxController {
  @operation({
    summary: "Get Gnxes",
  })
  @get()
  static getGnxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnx",
  })
  @post("{id}")
  static createGnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
