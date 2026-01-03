import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwds")
export default class CwdController {
  @operation({
    summary: "Get Cwds",
  })
  @get()
  static getCwds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwd",
  })
  @post("{id}")
  static createCwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
