import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emxes")
export default class EmxController {
  @operation({
    summary: "Get Emxes",
  })
  @get()
  static getEmxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emx",
  })
  @post("{id}")
  static createEmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
