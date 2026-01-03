import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ases")
export default class AseController {
  @operation({
    summary: "Get Ases",
  })
  @get()
  static getAses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ase",
  })
  @post("{id}")
  static createAse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
