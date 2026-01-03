import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqas")
export default class HqaController {
  @operation({
    summary: "Get Hqas",
  })
  @get()
  static getHqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqa",
  })
  @post("{id}")
  static createHqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
