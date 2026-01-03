import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcrs")
export default class HcrController {
  @operation({
    summary: "Get Hcrs",
  })
  @get()
  static getHcrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcr",
  })
  @post("{id}")
  static createHcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
