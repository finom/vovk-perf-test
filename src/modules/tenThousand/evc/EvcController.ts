import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evcs")
export default class EvcController {
  @operation({
    summary: "Get Evcs",
  })
  @get()
  static getEvcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evc",
  })
  @post("{id}")
  static createEvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
