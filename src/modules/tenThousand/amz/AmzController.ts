import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amzs")
export default class AmzController {
  @operation({
    summary: "Get Amzs",
  })
  @get()
  static getAmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amz",
  })
  @post("{id}")
  static createAmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
