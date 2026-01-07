import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inu")
export default class InuController {
  @operation({
    summary: "Get Inu",
  })
  @get()
  static getInu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inu",
  })
  @post("{id}")
  static createInu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
