import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeos")
export default class EeoController {
  @operation({
    summary: "Get Eeos",
  })
  @get()
  static getEeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eeo",
  })
  @post("{id}")
  static createEeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
