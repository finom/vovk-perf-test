import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ase")
export default class AseController {
  @operation({
    summary: "Get Ase",
  })
  @get()
  static getAse = procedure({
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
