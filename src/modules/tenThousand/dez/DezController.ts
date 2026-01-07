import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dez")
export default class DezController {
  @operation({
    summary: "Get Dez",
  })
  @get()
  static getDez = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dez",
  })
  @post("{id}")
  static createDez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
