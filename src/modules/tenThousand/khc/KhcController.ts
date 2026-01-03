import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khcs")
export default class KhcController {
  @operation({
    summary: "Get Khcs",
  })
  @get()
  static getKhcs = procedure({
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
