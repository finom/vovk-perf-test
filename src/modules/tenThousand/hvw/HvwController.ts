import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvws")
export default class HvwController {
  @operation({
    summary: "Get Hvws",
  })
  @get()
  static getHvws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvw",
  })
  @post("{id}")
  static createHvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
