import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leo")
export default class LeoController {
  @operation({
    summary: "Get Leo",
  })
  @get()
  static getLeo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Leo",
  })
  @post("{id}")
  static createLeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
