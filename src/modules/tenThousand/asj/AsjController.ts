import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asjs")
export default class AsjController {
  @operation({
    summary: "Get Asjs",
  })
  @get()
  static getAsjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asj",
  })
  @post("{id}")
  static createAsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
