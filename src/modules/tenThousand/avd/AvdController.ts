import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avds")
export default class AvdController {
  @operation({
    summary: "Get Avds",
  })
  @get()
  static getAvds = procedure({
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
