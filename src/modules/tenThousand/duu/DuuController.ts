import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duu")
export default class DuuController {
  @operation({
    summary: "Get Duu",
  })
  @get()
  static getDuu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duu",
  })
  @post("{id}")
  static createDuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
