import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jup")
export default class JupController {
  @operation({
    summary: "Get Jup",
  })
  @get()
  static getJup = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jup",
  })
  @post("{id}")
  static createJup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
