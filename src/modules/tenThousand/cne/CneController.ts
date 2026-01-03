import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnes")
export default class CneController {
  @operation({
    summary: "Get Cnes",
  })
  @get()
  static getCnes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cne",
  })
  @post("{id}")
  static createCne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
