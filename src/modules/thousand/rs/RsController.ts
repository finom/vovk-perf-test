import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rs")
export default class RsController {
  @operation({
    summary: "Get Rs",
  })
  @get()
  static getRs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rs",
  })
  @post("{id}")
  static createRs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
