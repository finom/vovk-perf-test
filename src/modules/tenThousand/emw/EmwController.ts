import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emw")
export default class EmwController {
  @operation({
    summary: "Get Emw",
  })
  @get()
  static getEmw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emw",
  })
  @post("{id}")
  static createEmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
