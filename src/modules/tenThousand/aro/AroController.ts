import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aro")
export default class AroController {
  @operation({
    summary: "Get Aro",
  })
  @get()
  static getAro = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aro",
  })
  @post("{id}")
  static createAro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
