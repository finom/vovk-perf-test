import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dra")
export default class DraController {
  @operation({
    summary: "Get Dra",
  })
  @get()
  static getDra = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dra",
  })
  @post("{id}")
  static createDra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
