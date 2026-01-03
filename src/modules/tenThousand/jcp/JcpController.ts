import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcps")
export default class JcpController {
  @operation({
    summary: "Get Jcps",
  })
  @get()
  static getJcps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcp",
  })
  @post("{id}")
  static createJcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
