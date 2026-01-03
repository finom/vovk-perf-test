import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jees")
export default class JeeController {
  @operation({
    summary: "Get Jees",
  })
  @get()
  static getJees = procedure({
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
