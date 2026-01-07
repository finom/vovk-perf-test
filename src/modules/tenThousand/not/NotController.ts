import { procedure, prefix, get, post, operation } from "vovk";

@prefix("not")
export default class NotController {
  @operation({
    summary: "Get Not",
  })
  @get()
  static getNot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Not",
  })
  @post("{id}")
  static createNot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
