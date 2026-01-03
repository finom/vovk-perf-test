import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qds")
export default class QdController {
  @operation({
    summary: "Get Qds",
  })
  @get()
  static getQds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qd",
  })
  @post("{id}")
  static createQd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
