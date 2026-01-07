import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nae")
export default class NaeController {
  @operation({
    summary: "Get Nae",
  })
  @get()
  static getNae = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nae",
  })
  @post("{id}")
  static createNae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
