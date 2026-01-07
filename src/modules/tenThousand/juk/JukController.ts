import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juk")
export default class JukController {
  @operation({
    summary: "Get Juk",
  })
  @get()
  static getJuk = procedure({
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
