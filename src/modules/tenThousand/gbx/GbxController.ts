import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbx")
export default class GbxController {
  @operation({
    summary: "Get Gbx",
  })
  @get()
  static getGbx = procedure({
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
