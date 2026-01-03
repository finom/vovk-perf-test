import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejqs")
export default class EjqController {
  @operation({
    summary: "Get Ejqs",
  })
  @get()
  static getEjqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejq",
  })
  @post("{id}")
  static createEjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
