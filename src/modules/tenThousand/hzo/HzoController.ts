import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzos")
export default class HzoController {
  @operation({
    summary: "Get Hzos",
  })
  @get()
  static getHzos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzo",
  })
  @post("{id}")
  static createHzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
