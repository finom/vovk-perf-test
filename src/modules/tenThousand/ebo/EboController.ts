import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebo")
export default class EboController {
  @operation({
    summary: "Get Ebo",
  })
  @get()
  static getEbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebo",
  })
  @post("{id}")
  static createEbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
