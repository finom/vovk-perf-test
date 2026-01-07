import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezo")
export default class EzoController {
  @operation({
    summary: "Get Ezo",
  })
  @get()
  static getEzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezo",
  })
  @post("{id}")
  static createEzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
