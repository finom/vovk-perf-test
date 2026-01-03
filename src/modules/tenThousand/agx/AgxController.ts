import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agxes")
export default class AgxController {
  @operation({
    summary: "Get Agxes",
  })
  @get()
  static getAgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agx",
  })
  @post("{id}")
  static createAgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
