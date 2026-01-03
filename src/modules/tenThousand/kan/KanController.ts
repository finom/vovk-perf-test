import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kans")
export default class KanController {
  @operation({
    summary: "Get Kans",
  })
  @get()
  static getKans = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kan",
  })
  @post("{id}")
  static createKan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
