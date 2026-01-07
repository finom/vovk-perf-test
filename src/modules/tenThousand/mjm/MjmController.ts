import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjm")
export default class MjmController {
  @operation({
    summary: "Get Mjm",
  })
  @get()
  static getMjm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjm",
  })
  @post("{id}")
  static createMjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
