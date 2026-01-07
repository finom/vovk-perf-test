import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kun")
export default class KunController {
  @operation({
    summary: "Get Kun",
  })
  @get()
  static getKun = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kun",
  })
  @post("{id}")
  static createKun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
