import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dom")
export default class DomController {
  @operation({
    summary: "Get Dom",
  })
  @get()
  static getDom = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dom",
  })
  @post("{id}")
  static createDom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
