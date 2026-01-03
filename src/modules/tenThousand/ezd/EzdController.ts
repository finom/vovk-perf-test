import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezds")
export default class EzdController {
  @operation({
    summary: "Get Ezds",
  })
  @get()
  static getEzds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezd",
  })
  @post("{id}")
  static createEzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
