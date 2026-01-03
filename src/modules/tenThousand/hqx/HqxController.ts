import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqxes")
export default class HqxController {
  @operation({
    summary: "Get Hqxes",
  })
  @get()
  static getHqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqx",
  })
  @post("{id}")
  static createHqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
