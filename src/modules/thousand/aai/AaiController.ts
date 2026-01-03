import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aais")
export default class AaiController {
  @operation({
    summary: "Get Aais",
  })
  @get()
  static getAais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aai",
  })
  @post("{id}")
  static createAai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
