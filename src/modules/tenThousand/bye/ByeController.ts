import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bye")
export default class ByeController {
  @operation({
    summary: "Get Bye",
  })
  @get()
  static getBye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bye",
  })
  @post("{id}")
  static createBye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
