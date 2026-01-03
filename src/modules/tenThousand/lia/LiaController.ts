import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lias")
export default class LiaController {
  @operation({
    summary: "Get Lias",
  })
  @get()
  static getLias = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lia",
  })
  @post("{id}")
  static createLia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
