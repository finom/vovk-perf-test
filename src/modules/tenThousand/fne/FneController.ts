import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnes")
export default class FneController {
  @operation({
    summary: "Get Fnes",
  })
  @get()
  static getFnes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fne",
  })
  @post("{id}")
  static createFne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
