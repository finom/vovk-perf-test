import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekts")
export default class EktController {
  @operation({
    summary: "Get Ekts",
  })
  @get()
  static getEkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekt",
  })
  @post("{id}")
  static createEkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
