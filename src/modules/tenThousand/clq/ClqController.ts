import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clq")
export default class ClqController {
  @operation({
    summary: "Get Clq",
  })
  @get()
  static getClq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clq",
  })
  @post("{id}")
  static createClq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
