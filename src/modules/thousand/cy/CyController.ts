import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cies")
export default class CyController {
  @operation({
    summary: "Get Cies",
  })
  @get()
  static getCies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cy",
  })
  @post("{id}")
  static createCy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
