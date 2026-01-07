import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doi")
export default class DoiController {
  @operation({
    summary: "Get Doi",
  })
  @get()
  static getDoi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doi",
  })
  @post("{id}")
  static createDoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
