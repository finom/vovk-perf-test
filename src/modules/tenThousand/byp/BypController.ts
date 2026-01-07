import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byp")
export default class BypController {
  @operation({
    summary: "Get Byp",
  })
  @get()
  static getByp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byp",
  })
  @post("{id}")
  static createByp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
