import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjb")
export default class JjbController {
  @operation({
    summary: "Get Jjb",
  })
  @get()
  static getJjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjb",
  })
  @post("{id}")
  static createJjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
