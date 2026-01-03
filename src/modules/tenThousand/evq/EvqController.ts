import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evqs")
export default class EvqController {
  @operation({
    summary: "Get Evqs",
  })
  @get()
  static getEvqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evq",
  })
  @post("{id}")
  static createEvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
