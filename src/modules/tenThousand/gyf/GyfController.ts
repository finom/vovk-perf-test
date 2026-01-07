import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyf")
export default class GyfController {
  @operation({
    summary: "Get Gyf",
  })
  @get()
  static getGyf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyf",
  })
  @post("{id}")
  static createGyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
