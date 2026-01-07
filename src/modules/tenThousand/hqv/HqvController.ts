import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqv")
export default class HqvController {
  @operation({
    summary: "Get Hqv",
  })
  @get()
  static getHqv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqv",
  })
  @post("{id}")
  static createHqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
