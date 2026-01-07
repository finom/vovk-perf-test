import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lia")
export default class LiaController {
  @operation({
    summary: "Get Lia",
  })
  @get()
  static getLia = procedure({
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
