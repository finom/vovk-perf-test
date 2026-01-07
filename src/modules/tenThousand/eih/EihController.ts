import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eih")
export default class EihController {
  @operation({
    summary: "Get Eih",
  })
  @get()
  static getEih = procedure({
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
