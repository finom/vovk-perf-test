import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khzs")
export default class KhzController {
  @operation({
    summary: "Get Khzs",
  })
  @get()
  static getKhzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khz",
  })
  @post("{id}")
  static createKhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
