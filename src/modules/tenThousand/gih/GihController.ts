import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gih")
export default class GihController {
  @operation({
    summary: "Get Gih",
  })
  @get()
  static getGih = procedure({
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
