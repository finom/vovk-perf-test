import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khk")
export default class KhkController {
  @operation({
    summary: "Get Khk",
  })
  @get()
  static getKhk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khk",
  })
  @post("{id}")
  static createKhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
