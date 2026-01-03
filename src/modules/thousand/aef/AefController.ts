import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aefs")
export default class AefController {
  @operation({
    summary: "Get Aefs",
  })
  @get()
  static getAefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aef",
  })
  @post("{id}")
  static createAef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
