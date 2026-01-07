import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ang")
export default class AngController {
  @operation({
    summary: "Get Ang",
  })
  @get()
  static getAng = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ang",
  })
  @post("{id}")
  static createAng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
