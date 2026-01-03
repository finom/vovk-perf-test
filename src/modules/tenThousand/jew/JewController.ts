import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jews")
export default class JewController {
  @operation({
    summary: "Get Jews",
  })
  @get()
  static getJews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jew",
  })
  @post("{id}")
  static createJew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
