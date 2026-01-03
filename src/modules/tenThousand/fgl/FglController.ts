import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgls")
export default class FglController {
  @operation({
    summary: "Get Fgls",
  })
  @get()
  static getFgls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgl",
  })
  @post("{id}")
  static createFgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
