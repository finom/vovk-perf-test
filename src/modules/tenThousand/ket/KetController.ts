import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ket")
export default class KetController {
  @operation({
    summary: "Get Ket",
  })
  @get()
  static getKet = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ket",
  })
  @post("{id}")
  static createKet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
