import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jups")
export default class JupController {
  @operation({
    summary: "Get Jups",
  })
  @get()
  static getJups = procedure({
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
