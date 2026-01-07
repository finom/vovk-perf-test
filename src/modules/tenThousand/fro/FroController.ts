import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fro")
export default class FroController {
  @operation({
    summary: "Get Fro",
  })
  @get()
  static getFro = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fro",
  })
  @post("{id}")
  static createFro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
