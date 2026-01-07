import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyo")
export default class IyoController {
  @operation({
    summary: "Get Iyo",
  })
  @get()
  static getIyo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyo",
  })
  @post("{id}")
  static createIyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
