import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axa")
export default class AxaController {
  @operation({
    summary: "Get Axa",
  })
  @get()
  static getAxa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axa",
  })
  @post("{id}")
  static createAxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
