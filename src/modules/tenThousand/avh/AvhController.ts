import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avhs")
export default class AvhController {
  @operation({
    summary: "Get Avhs",
  })
  @get()
  static getAvhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avh",
  })
  @post("{id}")
  static createAvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
