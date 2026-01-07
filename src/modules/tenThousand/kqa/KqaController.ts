import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqa")
export default class KqaController {
  @operation({
    summary: "Get Kqa",
  })
  @get()
  static getKqa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqa",
  })
  @post("{id}")
  static createKqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
