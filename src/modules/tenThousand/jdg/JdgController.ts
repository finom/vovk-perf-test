import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdgs")
export default class JdgController {
  @operation({
    summary: "Get Jdgs",
  })
  @get()
  static getJdgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdg",
  })
  @post("{id}")
  static createJdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
