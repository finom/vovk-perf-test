import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igds")
export default class IgdController {
  @operation({
    summary: "Get Igds",
  })
  @get()
  static getIgds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igd",
  })
  @post("{id}")
  static createIgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
