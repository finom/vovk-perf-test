import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axrs")
export default class AxrController {
  @operation({
    summary: "Get Axrs",
  })
  @get()
  static getAxrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axr",
  })
  @post("{id}")
  static createAxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
