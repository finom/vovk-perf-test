import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxes")
export default class JxController {
  @operation({
    summary: "Get Jxes",
  })
  @get()
  static getJxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jx",
  })
  @post("{id}")
  static createJx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
