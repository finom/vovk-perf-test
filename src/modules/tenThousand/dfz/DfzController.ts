import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfz")
export default class DfzController {
  @operation({
    summary: "Get Dfz",
  })
  @get()
  static getDfz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfz",
  })
  @post("{id}")
  static createDfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
