import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kan")
export default class KanController {
  @operation({
    summary: "Get Kan",
  })
  @get()
  static getKan = procedure({
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
