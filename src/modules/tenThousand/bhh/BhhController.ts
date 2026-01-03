import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhhs")
export default class BhhController {
  @operation({
    summary: "Get Bhhs",
  })
  @get()
  static getBhhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhh",
  })
  @post("{id}")
  static createBhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
