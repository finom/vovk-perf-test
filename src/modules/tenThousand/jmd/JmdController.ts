import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmds")
export default class JmdController {
  @operation({
    summary: "Get Jmds",
  })
  @get()
  static getJmds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmd",
  })
  @post("{id}")
  static createJmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
