import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byy")
export default class ByyController {
  @operation({
    summary: "Get Byy",
  })
  @get()
  static getByy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byy",
  })
  @post("{id}")
  static createByy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
