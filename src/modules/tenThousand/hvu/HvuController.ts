import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvus")
export default class HvuController {
  @operation({
    summary: "Get Hvus",
  })
  @get()
  static getHvus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvu",
  })
  @post("{id}")
  static createHvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
