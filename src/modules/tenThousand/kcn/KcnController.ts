import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcn")
export default class KcnController {
  @operation({
    summary: "Get Kcn",
  })
  @get()
  static getKcn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcn",
  })
  @post("{id}")
  static createKcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
