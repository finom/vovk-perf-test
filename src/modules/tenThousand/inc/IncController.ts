import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inc")
export default class IncController {
  @operation({
    summary: "Get Inc",
  })
  @get()
  static getInc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inc",
  })
  @post("{id}")
  static createInc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
