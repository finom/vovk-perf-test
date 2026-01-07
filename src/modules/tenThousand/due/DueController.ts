import { procedure, prefix, get, post, operation } from "vovk";

@prefix("due")
export default class DueController {
  @operation({
    summary: "Get Due",
  })
  @get()
  static getDue = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Due",
  })
  @post("{id}")
  static createDue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
