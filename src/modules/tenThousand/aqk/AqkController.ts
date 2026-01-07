import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqk")
export default class AqkController {
  @operation({
    summary: "Get Aqk",
  })
  @get()
  static getAqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqk",
  })
  @post("{id}")
  static createAqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
