import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heos")
export default class HeoController {
  @operation({
    summary: "Get Heos",
  })
  @get()
  static getHeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Heo",
  })
  @post("{id}")
  static createHeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
