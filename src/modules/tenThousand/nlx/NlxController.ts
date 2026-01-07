import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlx")
export default class NlxController {
  @operation({
    summary: "Get Nlx",
  })
  @get()
  static getNlx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlx",
  })
  @post("{id}")
  static createNlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
