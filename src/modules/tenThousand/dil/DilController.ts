import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dil")
export default class DilController {
  @operation({
    summary: "Get Dil",
  })
  @get()
  static getDil = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dil",
  })
  @post("{id}")
  static createDil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
