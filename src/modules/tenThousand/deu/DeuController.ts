import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deus")
export default class DeuController {
  @operation({
    summary: "Get Deus",
  })
  @get()
  static getDeus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Deu",
  })
  @post("{id}")
  static createDeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
