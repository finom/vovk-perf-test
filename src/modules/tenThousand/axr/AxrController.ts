import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axr")
export default class AxrController {
  @operation({
    summary: "Get Axr",
  })
  @get()
  static getAxr = procedure({
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
