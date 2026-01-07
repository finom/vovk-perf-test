import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzt")
export default class HztController {
  @operation({
    summary: "Get Hzt",
  })
  @get()
  static getHzt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzt",
  })
  @post("{id}")
  static createHzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
