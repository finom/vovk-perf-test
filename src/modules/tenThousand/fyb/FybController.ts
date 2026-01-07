import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyb")
export default class FybController {
  @operation({
    summary: "Get Fyb",
  })
  @get()
  static getFyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyb",
  })
  @post("{id}")
  static createFyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
