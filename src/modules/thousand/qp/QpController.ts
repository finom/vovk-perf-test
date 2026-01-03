import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qps")
export default class QpController {
  @operation({
    summary: "Get Qps",
  })
  @get()
  static getQps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qp",
  })
  @post("{id}")
  static createQp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
