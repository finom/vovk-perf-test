import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxxes")
export default class HxxController {
  @operation({
    summary: "Get Hxxes",
  })
  @get()
  static getHxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxx",
  })
  @post("{id}")
  static createHxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
