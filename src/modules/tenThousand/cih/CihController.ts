import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cihs")
export default class CihController {
  @operation({
    summary: "Get Cihs",
  })
  @get()
  static getCihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cih",
  })
  @post("{id}")
  static createCih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
