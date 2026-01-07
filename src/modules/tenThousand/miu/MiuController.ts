import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miu")
export default class MiuController {
  @operation({
    summary: "Get Miu",
  })
  @get()
  static getMiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Miu",
  })
  @post("{id}")
  static createMiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
