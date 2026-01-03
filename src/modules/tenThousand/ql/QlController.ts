import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qls")
export default class QlController {
  @operation({
    summary: "Get Qls",
  })
  @get()
  static getQls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ql",
  })
  @post("{id}")
  static createQl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
