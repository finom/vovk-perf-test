import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awks")
export default class AwkController {
  @operation({
    summary: "Get Awks",
  })
  @get()
  static getAwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awk",
  })
  @post("{id}")
  static createAwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
