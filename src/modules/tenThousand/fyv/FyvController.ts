import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyv")
export default class FyvController {
  @operation({
    summary: "Get Fyv",
  })
  @get()
  static getFyv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyv",
  })
  @post("{id}")
  static createFyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
