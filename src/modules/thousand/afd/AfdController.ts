import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afds")
export default class AfdController {
  @operation({
    summary: "Get Afds",
  })
  @get()
  static getAfds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afd",
  })
  @post("{id}")
  static createAfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
