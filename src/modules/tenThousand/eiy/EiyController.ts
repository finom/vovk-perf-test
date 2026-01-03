import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiys")
export default class EiyController {
  @operation({
    summary: "Get Eiys",
  })
  @get()
  static getEiys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eiy",
  })
  @post("{id}")
  static createEiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
