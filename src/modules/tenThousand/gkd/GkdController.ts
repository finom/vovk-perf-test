import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkds")
export default class GkdController {
  @operation({
    summary: "Get Gkds",
  })
  @get()
  static getGkds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkd",
  })
  @post("{id}")
  static createGkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
