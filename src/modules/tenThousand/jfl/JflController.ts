import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfl")
export default class JflController {
  @operation({
    summary: "Get Jfl",
  })
  @get()
  static getJfl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfl",
  })
  @post("{id}")
  static createJfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
