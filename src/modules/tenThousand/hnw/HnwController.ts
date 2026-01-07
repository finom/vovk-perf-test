import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnw")
export default class HnwController {
  @operation({
    summary: "Get Hnw",
  })
  @get()
  static getHnw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnw",
  })
  @post("{id}")
  static createHnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
