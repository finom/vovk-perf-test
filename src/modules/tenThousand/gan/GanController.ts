import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gans")
export default class GanController {
  @operation({
    summary: "Get Gans",
  })
  @get()
  static getGans = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gan",
  })
  @post("{id}")
  static createGan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
