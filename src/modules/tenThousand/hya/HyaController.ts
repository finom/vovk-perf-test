import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hya")
export default class HyaController {
  @operation({
    summary: "Get Hya",
  })
  @get()
  static getHya = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hya",
  })
  @post("{id}")
  static createHya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
