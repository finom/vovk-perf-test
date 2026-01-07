import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evn")
export default class EvnController {
  @operation({
    summary: "Get Evn",
  })
  @get()
  static getEvn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evn",
  })
  @post("{id}")
  static createEvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
