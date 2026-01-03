import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyps")
export default class EypController {
  @operation({
    summary: "Get Eyps",
  })
  @get()
  static getEyps = procedure({
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
