import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iihs")
export default class IihController {
  @operation({
    summary: "Get Iihs",
  })
  @get()
  static getIihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iih",
  })
  @post("{id}")
  static createIih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
