import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evas")
export default class EvaController {
  @operation({
    summary: "Get Evas",
  })
  @get()
  static getEvas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eva",
  })
  @post("{id}")
  static createEva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
