import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioes")
export default class IoeController {
  @operation({
    summary: "Get Ioes",
  })
  @get()
  static getIoes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioe",
  })
  @post("{id}")
  static createIoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
