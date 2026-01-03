import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enes")
export default class EneController {
  @operation({
    summary: "Get Enes",
  })
  @get()
  static getEnes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ene",
  })
  @post("{id}")
  static createEne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
