import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrps")
export default class JrpController {
  @operation({
    summary: "Get Jrps",
  })
  @get()
  static getJrps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrp",
  })
  @post("{id}")
  static createJrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
