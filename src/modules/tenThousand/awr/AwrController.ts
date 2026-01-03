import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awrs")
export default class AwrController {
  @operation({
    summary: "Get Awrs",
  })
  @get()
  static getAwrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awr",
  })
  @post("{id}")
  static createAwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
