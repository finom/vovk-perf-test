import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifs")
export default class IfsController {
  @operation({
    summary: "Get Ifs",
  })
  @get()
  static getIfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifs",
  })
  @post("{id}")
  static createIfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
