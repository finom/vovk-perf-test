import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avh")
export default class AvhController {
  @operation({
    summary: "Get Avh",
  })
  @get()
  static getAvh = procedure({
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
