import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jubs")
export default class JubController {
  @operation({
    summary: "Get Jubs",
  })
  @get()
  static getJubs = procedure({
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
