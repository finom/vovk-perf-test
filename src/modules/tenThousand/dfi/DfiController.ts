import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfis")
export default class DfiController {
  @operation({
    summary: "Get Dfis",
  })
  @get()
  static getDfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfi",
  })
  @post("{id}")
  static createDfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
