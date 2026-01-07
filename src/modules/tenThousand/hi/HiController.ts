import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hi")
export default class HiController {
  @operation({
    summary: "Get Hi",
  })
  @get()
  static getHi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hi",
  })
  @post("{id}")
  static createHi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
