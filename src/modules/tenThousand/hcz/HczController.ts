import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcz")
export default class HczController {
  @operation({
    summary: "Get Hcz",
  })
  @get()
  static getHcz = procedure({
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
