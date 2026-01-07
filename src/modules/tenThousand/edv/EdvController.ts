import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edv")
export default class EdvController {
  @operation({
    summary: "Get Edv",
  })
  @get()
  static getEdv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edv",
  })
  @post("{id}")
  static createEdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
