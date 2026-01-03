import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqes")
export default class JqeController {
  @operation({
    summary: "Get Jqes",
  })
  @get()
  static getJqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqe",
  })
  @post("{id}")
  static createJqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
