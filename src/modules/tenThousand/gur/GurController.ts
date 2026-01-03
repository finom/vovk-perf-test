import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gurs")
export default class GurController {
  @operation({
    summary: "Get Gurs",
  })
  @get()
  static getGurs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gur",
  })
  @post("{id}")
  static createGur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
