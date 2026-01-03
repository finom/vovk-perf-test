import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miqs")
export default class MiqController {
  @operation({
    summary: "Get Miqs",
  })
  @get()
  static getMiqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Miq",
  })
  @post("{id}")
  static createMiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
