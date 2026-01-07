import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqq")
export default class HqqController {
  @operation({
    summary: "Get Hqq",
  })
  @get()
  static getHqq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqq",
  })
  @post("{id}")
  static createHqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
