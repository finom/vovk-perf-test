import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcq")
export default class KcqController {
  @operation({
    summary: "Get Kcq",
  })
  @get()
  static getKcq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcq",
  })
  @post("{id}")
  static createKcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
