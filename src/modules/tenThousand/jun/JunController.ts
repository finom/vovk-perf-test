import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juns")
export default class JunController {
  @operation({
    summary: "Get Juns",
  })
  @get()
  static getJuns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jun",
  })
  @post("{id}")
  static createJun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
