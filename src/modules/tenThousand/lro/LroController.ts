import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lros")
export default class LroController {
  @operation({
    summary: "Get Lros",
  })
  @get()
  static getLros = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lro",
  })
  @post("{id}")
  static createLro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
