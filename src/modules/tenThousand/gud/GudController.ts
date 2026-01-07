import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gud")
export default class GudController {
  @operation({
    summary: "Get Gud",
  })
  @get()
  static getGud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gud",
  })
  @post("{id}")
  static createGud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
