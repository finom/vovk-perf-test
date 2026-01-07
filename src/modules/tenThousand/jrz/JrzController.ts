import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrz")
export default class JrzController {
  @operation({
    summary: "Get Jrz",
  })
  @get()
  static getJrz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrz",
  })
  @post("{id}")
  static createJrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
