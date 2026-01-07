import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abq")
export default class AbqController {
  @operation({
    summary: "Get Abq",
  })
  @get()
  static getAbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abq",
  })
  @post("{id}")
  static createAbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
