import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qks")
export default class QkController {
  @operation({
    summary: "Get Qks",
  })
  @get()
  static getQks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qk",
  })
  @post("{id}")
  static createQk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
