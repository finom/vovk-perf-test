import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvies")
export default class JvyController {
  @operation({
    summary: "Get Jvies",
  })
  @get()
  static getJvies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvy",
  })
  @post("{id}")
  static createJvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
