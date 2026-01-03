import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcies")
export default class GcyController {
  @operation({
    summary: "Get Gcies",
  })
  @get()
  static getGcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcy",
  })
  @post("{id}")
  static createGcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
