import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awgs")
export default class AwgController {
  @operation({
    summary: "Get Awgs",
  })
  @get()
  static getAwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awg",
  })
  @post("{id}")
  static createAwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
