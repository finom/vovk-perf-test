import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbx")
export default class JbxController {
  @operation({
    summary: "Get Jbx",
  })
  @get()
  static getJbx = procedure({
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
