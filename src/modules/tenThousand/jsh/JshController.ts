import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsh")
export default class JshController {
  @operation({
    summary: "Get Jsh",
  })
  @get()
  static getJsh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsh",
  })
  @post("{id}")
  static createJsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
