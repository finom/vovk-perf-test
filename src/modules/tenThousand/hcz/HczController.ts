import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hczs")
export default class HczController {
  @operation({
    summary: "Get Hczs",
  })
  @get()
  static getHczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcz",
  })
  @post("{id}")
  static createHcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
