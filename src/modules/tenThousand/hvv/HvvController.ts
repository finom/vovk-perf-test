import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvv")
export default class HvvController {
  @operation({
    summary: "Get Hvv",
  })
  @get()
  static getHvv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvv",
  })
  @post("{id}")
  static createHvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
