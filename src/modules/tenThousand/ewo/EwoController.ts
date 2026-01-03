import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewos")
export default class EwoController {
  @operation({
    summary: "Get Ewos",
  })
  @get()
  static getEwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewo",
  })
  @post("{id}")
  static createEwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
