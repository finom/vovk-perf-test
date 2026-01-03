import { procedure, prefix, get, post, operation } from "vovk";

@prefix("os")
export default class OsController {
  @operation({
    summary: "Get Os",
  })
  @get()
  static getOs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Os",
  })
  @post("{id}")
  static createOs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
