import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jub")
export default class JubController {
  @operation({
    summary: "Get Jub",
  })
  @get()
  static getJub = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jub",
  })
  @post("{id}")
  static createJub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
