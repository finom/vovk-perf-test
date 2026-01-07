import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agx")
export default class AgxController {
  @operation({
    summary: "Get Agx",
  })
  @get()
  static getAgx = procedure({
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
