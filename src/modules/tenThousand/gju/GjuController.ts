import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gju")
export default class GjuController {
  @operation({
    summary: "Get Gju",
  })
  @get()
  static getGju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gju",
  })
  @post("{id}")
  static createGju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
