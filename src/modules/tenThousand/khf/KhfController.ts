import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khfs")
export default class KhfController {
  @operation({
    summary: "Get Khfs",
  })
  @get()
  static getKhfs = procedure({
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
