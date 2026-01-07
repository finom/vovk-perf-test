import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxe")
export default class HxeController {
  @operation({
    summary: "Get Hxe",
  })
  @get()
  static getHxe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxe",
  })
  @post("{id}")
  static createHxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
