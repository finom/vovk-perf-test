import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfq")
export default class KfqController {
  @operation({
    summary: "Get Kfq",
  })
  @get()
  static getKfq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfq",
  })
  @post("{id}")
  static createKfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
