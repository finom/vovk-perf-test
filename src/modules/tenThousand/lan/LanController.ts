import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lans")
export default class LanController {
  @operation({
    summary: "Get Lans",
  })
  @get()
  static getLans = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lan",
  })
  @post("{id}")
  static createLan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
