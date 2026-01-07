import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gya")
export default class GyaController {
  @operation({
    summary: "Get Gya",
  })
  @get()
  static getGya = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gya",
  })
  @post("{id}")
  static createGya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
