import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqh")
export default class HqhController {
  @operation({
    summary: "Get Hqh",
  })
  @get()
  static getHqh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqh",
  })
  @post("{id}")
  static createHqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
