import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwhs")
export default class GwhController {
  @operation({
    summary: "Get Gwhs",
  })
  @get()
  static getGwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwh",
  })
  @post("{id}")
  static createGwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
