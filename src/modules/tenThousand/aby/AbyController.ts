import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abies")
export default class AbyController {
  @operation({
    summary: "Get Abies",
  })
  @get()
  static getAbies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aby",
  })
  @post("{id}")
  static createAby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
