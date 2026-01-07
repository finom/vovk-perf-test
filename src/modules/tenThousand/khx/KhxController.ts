import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khx")
export default class KhxController {
  @operation({
    summary: "Get Khx",
  })
  @get()
  static getKhx = procedure({
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
