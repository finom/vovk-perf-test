import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jee")
export default class JeeController {
  @operation({
    summary: "Get Jee",
  })
  @get()
  static getJee = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jee",
  })
  @post("{id}")
  static createJee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
