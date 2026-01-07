import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqk")
export default class HqkController {
  @operation({
    summary: "Get Hqk",
  })
  @get()
  static getHqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqk",
  })
  @post("{id}")
  static createHqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
