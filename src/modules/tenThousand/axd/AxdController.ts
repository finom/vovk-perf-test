import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axd")
export default class AxdController {
  @operation({
    summary: "Get Axd",
  })
  @get()
  static getAxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axd",
  })
  @post("{id}")
  static createAxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
