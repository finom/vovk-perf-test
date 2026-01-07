import { procedure, prefix, get, post, operation } from "vovk";

@prefix("im")
export default class ImController {
  @operation({
    summary: "Get Im",
  })
  @get()
  static getIm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Im",
  })
  @post("{id}")
  static createIm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
