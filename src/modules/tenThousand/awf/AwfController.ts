import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awf")
export default class AwfController {
  @operation({
    summary: "Get Awf",
  })
  @get()
  static getAwf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awf",
  })
  @post("{id}")
  static createAwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
