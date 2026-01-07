import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cih")
export default class CihController {
  @operation({
    summary: "Get Cih",
  })
  @get()
  static getCih = procedure({
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
