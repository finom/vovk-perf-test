import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjbs")
export default class JjbController {
  @operation({
    summary: "Get Jjbs",
  })
  @get()
  static getJjbs = procedure({
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
