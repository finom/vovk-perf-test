import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqis")
export default class JqiController {
  @operation({
    summary: "Get Jqis",
  })
  @get()
  static getJqis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqi",
  })
  @post("{id}")
  static createJqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
