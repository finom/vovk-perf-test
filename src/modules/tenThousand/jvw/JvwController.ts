import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvw")
export default class JvwController {
  @operation({
    summary: "Get Jvw",
  })
  @get()
  static getJvw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvw",
  })
  @post("{id}")
  static createJvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
