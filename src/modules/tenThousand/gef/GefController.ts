import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gefs")
export default class GefController {
  @operation({
    summary: "Get Gefs",
  })
  @get()
  static getGefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gef",
  })
  @post("{id}")
  static createGef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
