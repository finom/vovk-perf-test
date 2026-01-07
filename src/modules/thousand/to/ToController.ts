import { procedure, prefix, get, post, operation } from "vovk";

@prefix("to")
export default class ToController {
  @operation({
    summary: "Get To",
  })
  @get()
  static getTo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create To",
  })
  @post("{id}")
  static createTo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
