import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbxes")
export default class GbxController {
  @operation({
    summary: "Get Gbxes",
  })
  @get()
  static getGbxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbx",
  })
  @post("{id}")
  static createGbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
