import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bihs")
export default class BihController {
  @operation({
    summary: "Get Bihs",
  })
  @get()
  static getBihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bih",
  })
  @post("{id}")
  static createBih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
