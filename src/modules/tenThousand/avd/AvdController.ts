import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avd")
export default class AvdController {
  @operation({
    summary: "Get Avd",
  })
  @get()
  static getAvd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avd",
  })
  @post("{id}")
  static createAvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
