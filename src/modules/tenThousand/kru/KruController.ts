import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krus")
export default class KruController {
  @operation({
    summary: "Get Krus",
  })
  @get()
  static getKrus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kru",
  })
  @post("{id}")
  static createKru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
