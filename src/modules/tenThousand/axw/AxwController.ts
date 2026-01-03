import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axws")
export default class AxwController {
  @operation({
    summary: "Get Axws",
  })
  @get()
  static getAxws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axw",
  })
  @post("{id}")
  static createAxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
