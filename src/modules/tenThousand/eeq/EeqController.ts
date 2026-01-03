import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeqs")
export default class EeqController {
  @operation({
    summary: "Get Eeqs",
  })
  @get()
  static getEeqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eeq",
  })
  @post("{id}")
  static createEeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
