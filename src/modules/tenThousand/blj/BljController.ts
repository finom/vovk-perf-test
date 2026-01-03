import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bljs")
export default class BljController {
  @operation({
    summary: "Get Bljs",
  })
  @get()
  static getBljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blj",
  })
  @post("{id}")
  static createBlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
