import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ned")
export default class NedController {
  @operation({
    summary: "Get Ned",
  })
  @get()
  static getNed = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ned",
  })
  @post("{id}")
  static createNed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
