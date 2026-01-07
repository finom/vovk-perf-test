import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kho")
export default class KhoController {
  @operation({
    summary: "Get Kho",
  })
  @get()
  static getKho = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kho",
  })
  @post("{id}")
  static createKho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
