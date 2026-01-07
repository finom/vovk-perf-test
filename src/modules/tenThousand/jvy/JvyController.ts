import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvy")
export default class JvyController {
  @operation({
    summary: "Get Jvy",
  })
  @get()
  static getJvy = procedure({
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
