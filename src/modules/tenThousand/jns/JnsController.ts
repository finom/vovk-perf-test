import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jns")
export default class JnsController {
  @operation({
    summary: "Get Jns",
  })
  @get()
  static getJns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jns",
  })
  @post("{id}")
  static createJns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
