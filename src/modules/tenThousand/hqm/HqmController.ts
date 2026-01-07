import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqm")
export default class HqmController {
  @operation({
    summary: "Get Hqm",
  })
  @get()
  static getHqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqm",
  })
  @post("{id}")
  static createHqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
