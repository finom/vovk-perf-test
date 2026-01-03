import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khrs")
export default class KhrController {
  @operation({
    summary: "Get Khrs",
  })
  @get()
  static getKhrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khr",
  })
  @post("{id}")
  static createKhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
