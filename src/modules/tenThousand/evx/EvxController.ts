import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evxes")
export default class EvxController {
  @operation({
    summary: "Get Evxes",
  })
  @get()
  static getEvxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evx",
  })
  @post("{id}")
  static createEvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
