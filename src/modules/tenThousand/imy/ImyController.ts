import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imies")
export default class ImyController {
  @operation({
    summary: "Get Imies",
  })
  @get()
  static getImies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imy",
  })
  @post("{id}")
  static createImy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
