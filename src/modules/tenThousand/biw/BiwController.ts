import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biw")
export default class BiwController {
  @operation({
    summary: "Get Biw",
  })
  @get()
  static getBiw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Biw",
  })
  @post("{id}")
  static createBiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
