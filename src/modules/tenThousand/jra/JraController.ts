import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jra")
export default class JraController {
  @operation({
    summary: "Get Jra",
  })
  @get()
  static getJra = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jra",
  })
  @post("{id}")
  static createJra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
