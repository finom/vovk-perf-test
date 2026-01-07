import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlk")
export default class NlkController {
  @operation({
    summary: "Get Nlk",
  })
  @get()
  static getNlk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlk",
  })
  @post("{id}")
  static createNlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
