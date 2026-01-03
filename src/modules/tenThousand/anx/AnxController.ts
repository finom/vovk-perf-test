import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anxes")
export default class AnxController {
  @operation({
    summary: "Get Anxes",
  })
  @get()
  static getAnxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anx",
  })
  @post("{id}")
  static createAnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
