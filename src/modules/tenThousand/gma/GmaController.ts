import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmas")
export default class GmaController {
  @operation({
    summary: "Get Gmas",
  })
  @get()
  static getGmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gma",
  })
  @post("{id}")
  static createGma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
