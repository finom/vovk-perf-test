import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwies")
export default class KwyController {
  @operation({
    summary: "Get Kwies",
  })
  @get()
  static getKwies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwy",
  })
  @post("{id}")
  static createKwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
