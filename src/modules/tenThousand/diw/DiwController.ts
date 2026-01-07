import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diw")
export default class DiwController {
  @operation({
    summary: "Get Diw",
  })
  @get()
  static getDiw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Diw",
  })
  @post("{id}")
  static createDiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
