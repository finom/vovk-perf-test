import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avy")
export default class AvyController {
  @operation({
    summary: "Get Avy",
  })
  @get()
  static getAvy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avy",
  })
  @post("{id}")
  static createAvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
