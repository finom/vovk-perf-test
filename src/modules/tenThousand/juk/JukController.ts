import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juks")
export default class JukController {
  @operation({
    summary: "Get Juks",
  })
  @get()
  static getJuks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juk",
  })
  @post("{id}")
  static createJuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
