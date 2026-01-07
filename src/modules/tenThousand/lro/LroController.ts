import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lro")
export default class LroController {
  @operation({
    summary: "Get Lro",
  })
  @get()
  static getLro = procedure({
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
