import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elns")
export default class ElnController {
  @operation({
    summary: "Get Elns",
  })
  @get()
  static getElns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eln",
  })
  @post("{id}")
  static createEln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
