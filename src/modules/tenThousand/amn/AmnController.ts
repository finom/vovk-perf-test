import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amn")
export default class AmnController {
  @operation({
    summary: "Get Amn",
  })
  @get()
  static getAmn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amn",
  })
  @post("{id}")
  static createAmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
