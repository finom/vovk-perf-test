import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boe")
export default class BoeController {
  @operation({
    summary: "Get Boe",
  })
  @get()
  static getBoe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boe",
  })
  @post("{id}")
  static createBoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
