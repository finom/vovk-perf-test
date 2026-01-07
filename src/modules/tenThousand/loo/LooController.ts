import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loo")
export default class LooController {
  @operation({
    summary: "Get Loo",
  })
  @get()
  static getLoo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loo",
  })
  @post("{id}")
  static createLoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
