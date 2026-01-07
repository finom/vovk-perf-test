import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nel")
export default class NelController {
  @operation({
    summary: "Get Nel",
  })
  @get()
  static getNel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nel",
  })
  @post("{id}")
  static createNel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
