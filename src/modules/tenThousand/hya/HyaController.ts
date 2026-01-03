import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyas")
export default class HyaController {
  @operation({
    summary: "Get Hyas",
  })
  @get()
  static getHyas = procedure({
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
