import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heh")
export default class HehController {
  @operation({
    summary: "Get Heh",
  })
  @get()
  static getHeh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Heh",
  })
  @post("{id}")
  static createHeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
