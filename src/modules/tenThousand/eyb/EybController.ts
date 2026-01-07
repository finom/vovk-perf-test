import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyb")
export default class EybController {
  @operation({
    summary: "Get Eyb",
  })
  @get()
  static getEyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyb",
  })
  @post("{id}")
  static createEyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
