import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjis")
export default class MjiController {
  @operation({
    summary: "Get Mjis",
  })
  @get()
  static getMjis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mji",
  })
  @post("{id}")
  static createMji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
