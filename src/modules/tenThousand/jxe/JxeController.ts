import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxes")
export default class JxeController {
  @operation({
    summary: "Get Jxes",
  })
  @get()
  static getJxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxe",
  })
  @post("{id}")
  static createJxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
