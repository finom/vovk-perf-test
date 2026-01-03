import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eihs")
export default class EihController {
  @operation({
    summary: "Get Eihs",
  })
  @get()
  static getEihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eih",
  })
  @post("{id}")
  static createEih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
