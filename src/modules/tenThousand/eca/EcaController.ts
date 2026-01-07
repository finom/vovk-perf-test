import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eca")
export default class EcaController {
  @operation({
    summary: "Get Eca",
  })
  @get()
  static getEca = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eca",
  })
  @post("{id}")
  static createEca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
