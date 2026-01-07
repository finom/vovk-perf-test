import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiu")
export default class HiuController {
  @operation({
    summary: "Get Hiu",
  })
  @get()
  static getHiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hiu",
  })
  @post("{id}")
  static createHiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
