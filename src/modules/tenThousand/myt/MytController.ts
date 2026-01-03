import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myts")
export default class MytController {
  @operation({
    summary: "Get Myts",
  })
  @get()
  static getMyts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myt",
  })
  @post("{id}")
  static createMyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
