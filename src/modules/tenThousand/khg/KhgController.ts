import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khg")
export default class KhgController {
  @operation({
    summary: "Get Khg",
  })
  @get()
  static getKhg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khg",
  })
  @post("{id}")
  static createKhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
