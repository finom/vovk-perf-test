import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhu")
export default class JhuController {
  @operation({
    summary: "Get Jhu",
  })
  @get()
  static getJhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhu",
  })
  @post("{id}")
  static createJhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
