import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anx")
export default class AnxController {
  @operation({
    summary: "Get Anx",
  })
  @get()
  static getAnx = procedure({
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
