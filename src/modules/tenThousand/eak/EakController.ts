import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eak")
export default class EakController {
  @operation({
    summary: "Get Eak",
  })
  @get()
  static getEak = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eak",
  })
  @post("{id}")
  static createEak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
