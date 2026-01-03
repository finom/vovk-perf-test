import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuqs")
export default class IuqController {
  @operation({
    summary: "Get Iuqs",
  })
  @get()
  static getIuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuq",
  })
  @post("{id}")
  static createIuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
