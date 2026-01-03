import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkes")
export default class DkeController {
  @operation({
    summary: "Get Dkes",
  })
  @get()
  static getDkes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dke",
  })
  @post("{id}")
  static createDke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
