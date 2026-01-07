import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhu")
export default class MhuController {
  @operation({
    summary: "Get Mhu",
  })
  @get()
  static getMhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhu",
  })
  @post("{id}")
  static createMhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
