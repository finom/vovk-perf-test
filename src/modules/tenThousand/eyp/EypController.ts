import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyp")
export default class EypController {
  @operation({
    summary: "Get Eyp",
  })
  @get()
  static getEyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyp",
  })
  @post("{id}")
  static createEyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
