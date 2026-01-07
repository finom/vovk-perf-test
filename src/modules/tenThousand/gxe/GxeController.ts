import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxe")
export default class GxeController {
  @operation({
    summary: "Get Gxe",
  })
  @get()
  static getGxe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxe",
  })
  @post("{id}")
  static createGxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
