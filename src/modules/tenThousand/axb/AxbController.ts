import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axb")
export default class AxbController {
  @operation({
    summary: "Get Axb",
  })
  @get()
  static getAxb = procedure({
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
