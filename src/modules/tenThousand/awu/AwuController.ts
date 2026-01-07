import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awu")
export default class AwuController {
  @operation({
    summary: "Get Awu",
  })
  @get()
  static getAwu = procedure({
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
