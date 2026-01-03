import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apxes")
export default class ApxController {
  @operation({
    summary: "Get Apxes",
  })
  @get()
  static getApxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apx",
  })
  @post("{id}")
  static createApx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
