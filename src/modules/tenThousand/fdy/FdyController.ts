import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdy")
export default class FdyController {
  @operation({
    summary: "Get Fdy",
  })
  @get()
  static getFdy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdy",
  })
  @post("{id}")
  static createFdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
