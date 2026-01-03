import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qzs")
export default class QzController {
  @operation({
    summary: "Get Qzs",
  })
  @get()
  static getQzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qz",
  })
  @post("{id}")
  static createQz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
