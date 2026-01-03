import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbxes")
export default class JbxController {
  @operation({
    summary: "Get Jbxes",
  })
  @get()
  static getJbxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbx",
  })
  @post("{id}")
  static createJbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
