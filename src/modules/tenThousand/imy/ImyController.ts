import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imy")
export default class ImyController {
  @operation({
    summary: "Get Imy",
  })
  @get()
  static getImy = procedure({
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
