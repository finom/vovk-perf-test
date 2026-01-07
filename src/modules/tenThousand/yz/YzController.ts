import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yz")
export default class YzController {
  @operation({
    summary: "Get Yz",
  })
  @get()
  static getYz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yz",
  })
  @post("{id}")
  static createYz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
