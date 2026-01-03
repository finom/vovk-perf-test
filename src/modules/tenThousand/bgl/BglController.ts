import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgls")
export default class BglController {
  @operation({
    summary: "Get Bgls",
  })
  @get()
  static getBgls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgl",
  })
  @post("{id}")
  static createBgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
