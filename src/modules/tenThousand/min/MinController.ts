import { procedure, prefix, get, post, operation } from "vovk";

@prefix("min")
export default class MinController {
  @operation({
    summary: "Get Min",
  })
  @get()
  static getMin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Min",
  })
  @post("{id}")
  static createMin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
