import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edq")
export default class EdqController {
  @operation({
    summary: "Get Edq",
  })
  @get()
  static getEdq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edq",
  })
  @post("{id}")
  static createEdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
