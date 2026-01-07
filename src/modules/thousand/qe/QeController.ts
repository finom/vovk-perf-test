import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qe")
export default class QeController {
  @operation({
    summary: "Get Qe",
  })
  @get()
  static getQe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qe",
  })
  @post("{id}")
  static createQe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
