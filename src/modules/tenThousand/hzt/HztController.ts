import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzts")
export default class HztController {
  @operation({
    summary: "Get Hzts",
  })
  @get()
  static getHzts = procedure({
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
