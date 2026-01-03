import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axbs")
export default class AxbController {
  @operation({
    summary: "Get Axbs",
  })
  @get()
  static getAxbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axb",
  })
  @post("{id}")
  static createAxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
