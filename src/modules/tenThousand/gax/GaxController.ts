import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaxes")
export default class GaxController {
  @operation({
    summary: "Get Gaxes",
  })
  @get()
  static getGaxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gax",
  })
  @post("{id}")
  static createGax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
