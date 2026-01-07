import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aez")
export default class AezController {
  @operation({
    summary: "Get Aez",
  })
  @get()
  static getAez = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aez",
  })
  @post("{id}")
  static createAez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
