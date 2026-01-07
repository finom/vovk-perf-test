import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqa")
export default class DqaController {
  @operation({
    summary: "Get Dqa",
  })
  @get()
  static getDqa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqa",
  })
  @post("{id}")
  static createDqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
