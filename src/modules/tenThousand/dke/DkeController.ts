import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dke")
export default class DkeController {
  @operation({
    summary: "Get Dke",
  })
  @get()
  static getDke = procedure({
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
