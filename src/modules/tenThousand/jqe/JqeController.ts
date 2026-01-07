import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqe")
export default class JqeController {
  @operation({
    summary: "Get Jqe",
  })
  @get()
  static getJqe = procedure({
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
