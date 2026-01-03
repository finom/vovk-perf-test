import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awus")
export default class AwuController {
  @operation({
    summary: "Get Awus",
  })
  @get()
  static getAwus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awu",
  })
  @post("{id}")
  static createAwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
