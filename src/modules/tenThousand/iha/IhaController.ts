import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihas")
export default class IhaController {
  @operation({
    summary: "Get Ihas",
  })
  @get()
  static getIhas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iha",
  })
  @post("{id}")
  static createIha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
