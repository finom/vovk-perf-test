import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gan")
export default class GanController {
  @operation({
    summary: "Get Gan",
  })
  @get()
  static getGan = procedure({
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
