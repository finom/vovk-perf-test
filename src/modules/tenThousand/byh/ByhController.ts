import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byh")
export default class ByhController {
  @operation({
    summary: "Get Byh",
  })
  @get()
  static getByh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byh",
  })
  @post("{id}")
  static createByh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
