import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khf")
export default class KhfController {
  @operation({
    summary: "Get Khf",
  })
  @get()
  static getKhf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khf",
  })
  @post("{id}")
  static createKhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
