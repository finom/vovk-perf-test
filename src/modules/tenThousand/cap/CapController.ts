import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cap")
export default class CapController {
  @operation({
    summary: "Get Cap",
  })
  @get()
  static getCap = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cap",
  })
  @post("{id}")
  static createCap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
