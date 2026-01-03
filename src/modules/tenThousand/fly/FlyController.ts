import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flies")
export default class FlyController {
  @operation({
    summary: "Get Flies",
  })
  @get()
  static getFlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fly",
  })
  @post("{id}")
  static createFly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
