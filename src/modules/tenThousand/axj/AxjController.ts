import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axjs")
export default class AxjController {
  @operation({
    summary: "Get Axjs",
  })
  @get()
  static getAxjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axj",
  })
  @post("{id}")
  static createAxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
