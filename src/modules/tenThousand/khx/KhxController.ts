import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khxes")
export default class KhxController {
  @operation({
    summary: "Get Khxes",
  })
  @get()
  static getKhxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khx",
  })
  @post("{id}")
  static createKhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
