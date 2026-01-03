import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dars")
export default class DarController {
  @operation({
    summary: "Get Dars",
  })
  @get()
  static getDars = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dar",
  })
  @post("{id}")
  static createDar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
