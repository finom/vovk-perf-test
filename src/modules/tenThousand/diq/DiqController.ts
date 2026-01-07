import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diq")
export default class DiqController {
  @operation({
    summary: "Get Diq",
  })
  @get()
  static getDiq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Diq",
  })
  @post("{id}")
  static createDiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
