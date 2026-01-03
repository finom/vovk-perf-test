import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dans")
export default class DanController {
  @operation({
    summary: "Get Dans",
  })
  @get()
  static getDans = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dan",
  })
  @post("{id}")
  static createDan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
