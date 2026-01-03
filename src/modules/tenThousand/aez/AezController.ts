import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aezs")
export default class AezController {
  @operation({
    summary: "Get Aezs",
  })
  @get()
  static getAezs = procedure({
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
