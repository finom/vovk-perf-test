import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyy")
export default class EyyController {
  @operation({
    summary: "Get Eyy",
  })
  @get()
  static getEyy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyy",
  })
  @post("{id}")
  static createEyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
