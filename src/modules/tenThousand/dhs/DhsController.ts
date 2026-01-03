import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhs")
export default class DhsController {
  @operation({
    summary: "Get Dhs",
  })
  @get()
  static getDhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhs",
  })
  @post("{id}")
  static createDhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
