import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qxes")
export default class QxController {
  @operation({
    summary: "Get Qxes",
  })
  @get()
  static getQxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qx",
  })
  @post("{id}")
  static createQx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
