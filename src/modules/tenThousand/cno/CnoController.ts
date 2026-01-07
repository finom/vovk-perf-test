import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cno")
export default class CnoController {
  @operation({
    summary: "Get Cno",
  })
  @get()
  static getCno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cno",
  })
  @post("{id}")
  static createCno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
