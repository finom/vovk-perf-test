import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khz")
export default class KhzController {
  @operation({
    summary: "Get Khz",
  })
  @get()
  static getKhz = procedure({
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
