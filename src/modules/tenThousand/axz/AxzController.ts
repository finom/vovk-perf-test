import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axzs")
export default class AxzController {
  @operation({
    summary: "Get Axzs",
  })
  @get()
  static getAxzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axz",
  })
  @post("{id}")
  static createAxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
