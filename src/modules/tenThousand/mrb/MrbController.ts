import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrbs")
export default class MrbController {
  @operation({
    summary: "Get Mrbs",
  })
  @get()
  static getMrbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrb",
  })
  @post("{id}")
  static createMrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
