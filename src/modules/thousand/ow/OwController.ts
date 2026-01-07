import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ow")
export default class OwController {
  @operation({
    summary: "Get Ow",
  })
  @get()
  static getOw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ow",
  })
  @post("{id}")
  static createOw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
