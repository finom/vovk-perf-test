import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cow")
export default class CowController {
  @operation({
    summary: "Get Cow",
  })
  @get()
  static getCow = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cow",
  })
  @post("{id}")
  static createCow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
