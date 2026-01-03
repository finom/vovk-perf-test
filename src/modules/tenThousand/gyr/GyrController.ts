import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyrs")
export default class GyrController {
  @operation({
    summary: "Get Gyrs",
  })
  @get()
  static getGyrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyr",
  })
  @post("{id}")
  static createGyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
