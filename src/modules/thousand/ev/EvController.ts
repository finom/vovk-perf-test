import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ev")
export default class EvController {
  @operation({
    summary: "Get Ev",
  })
  @get()
  static getEv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ev",
  })
  @post("{id}")
  static createEv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
