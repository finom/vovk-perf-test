import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lut")
export default class LutController {
  @operation({
    summary: "Get Lut",
  })
  @get()
  static getLut = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lut",
  })
  @post("{id}")
  static createLut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
