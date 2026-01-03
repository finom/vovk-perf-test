import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ects")
export default class EctController {
  @operation({
    summary: "Get Ects",
  })
  @get()
  static getEcts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ect",
  })
  @post("{id}")
  static createEct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
