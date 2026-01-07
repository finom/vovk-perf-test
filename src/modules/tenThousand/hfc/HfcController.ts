import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfc")
export default class HfcController {
  @operation({
    summary: "Get Hfc",
  })
  @get()
  static getHfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfc",
  })
  @post("{id}")
  static createHfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
