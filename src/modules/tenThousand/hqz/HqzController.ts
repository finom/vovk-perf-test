import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqzs")
export default class HqzController {
  @operation({
    summary: "Get Hqzs",
  })
  @get()
  static getHqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqz",
  })
  @post("{id}")
  static createHqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
