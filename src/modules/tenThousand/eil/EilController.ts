import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eils")
export default class EilController {
  @operation({
    summary: "Get Eils",
  })
  @get()
  static getEils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eil",
  })
  @post("{id}")
  static createEil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
