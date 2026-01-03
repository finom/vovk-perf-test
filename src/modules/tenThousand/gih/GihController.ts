import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gihs")
export default class GihController {
  @operation({
    summary: "Get Gihs",
  })
  @get()
  static getGihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gih",
  })
  @post("{id}")
  static createGih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
