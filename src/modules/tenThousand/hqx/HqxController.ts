import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqx")
export default class HqxController {
  @operation({
    summary: "Get Hqx",
  })
  @get()
  static getHqx = procedure({
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
