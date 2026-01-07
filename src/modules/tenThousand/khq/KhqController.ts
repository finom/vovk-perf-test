import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khq")
export default class KhqController {
  @operation({
    summary: "Get Khq",
  })
  @get()
  static getKhq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khq",
  })
  @post("{id}")
  static createKhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
