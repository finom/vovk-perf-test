import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdes")
export default class KdeController {
  @operation({
    summary: "Get Kdes",
  })
  @get()
  static getKdes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kde",
  })
  @post("{id}")
  static createKde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
