import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeus")
export default class EeuController {
  @operation({
    summary: "Get Eeus",
  })
  @get()
  static getEeus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eeu",
  })
  @post("{id}")
  static createEeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
