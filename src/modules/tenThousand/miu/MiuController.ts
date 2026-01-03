import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mius")
export default class MiuController {
  @operation({
    summary: "Get Mius",
  })
  @get()
  static getMius = procedure({
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
