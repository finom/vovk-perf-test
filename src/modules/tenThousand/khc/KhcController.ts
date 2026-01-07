import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khc")
export default class KhcController {
  @operation({
    summary: "Get Khc",
  })
  @get()
  static getKhc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khc",
  })
  @post("{id}")
  static createKhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
