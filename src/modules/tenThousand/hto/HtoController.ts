import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hto")
export default class HtoController {
  @operation({
    summary: "Get Hto",
  })
  @get()
  static getHto = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hto",
  })
  @post("{id}")
  static createHto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
