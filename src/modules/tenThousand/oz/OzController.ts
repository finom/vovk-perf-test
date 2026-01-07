import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oz")
export default class OzController {
  @operation({
    summary: "Get Oz",
  })
  @get()
  static getOz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oz",
  })
  @post("{id}")
  static createOz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
