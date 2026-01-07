import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imc")
export default class ImcController {
  @operation({
    summary: "Get Imc",
  })
  @get()
  static getImc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imc",
  })
  @post("{id}")
  static createImc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
