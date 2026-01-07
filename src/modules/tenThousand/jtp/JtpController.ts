import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtp")
export default class JtpController {
  @operation({
    summary: "Get Jtp",
  })
  @get()
  static getJtp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtp",
  })
  @post("{id}")
  static createJtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
