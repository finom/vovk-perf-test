import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvis")
export default class JviController {
  @operation({
    summary: "Get Jvis",
  })
  @get()
  static getJvis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvi",
  })
  @post("{id}")
  static createJvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
