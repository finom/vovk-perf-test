import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfhs")
export default class DfhController {
  @operation({
    summary: "Get Dfhs",
  })
  @get()
  static getDfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfh",
  })
  @post("{id}")
  static createDfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
