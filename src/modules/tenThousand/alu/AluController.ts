import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alu")
export default class AluController {
  @operation({
    summary: "Get Alu",
  })
  @get()
  static getAlu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alu",
  })
  @post("{id}")
  static createAlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
