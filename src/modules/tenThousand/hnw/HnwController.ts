import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnws")
export default class HnwController {
  @operation({
    summary: "Get Hnws",
  })
  @get()
  static getHnws = procedure({
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
