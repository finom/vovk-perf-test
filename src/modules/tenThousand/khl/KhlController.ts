import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khls")
export default class KhlController {
  @operation({
    summary: "Get Khls",
  })
  @get()
  static getKhls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khl",
  })
  @post("{id}")
  static createKhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
