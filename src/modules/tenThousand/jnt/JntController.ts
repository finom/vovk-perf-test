import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnt")
export default class JntController {
  @operation({
    summary: "Get Jnt",
  })
  @get()
  static getJnt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnt",
  })
  @post("{id}")
  static createJnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
