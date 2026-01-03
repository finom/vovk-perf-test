import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvds")
export default class JvdController {
  @operation({
    summary: "Get Jvds",
  })
  @get()
  static getJvds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvd",
  })
  @post("{id}")
  static createJvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
