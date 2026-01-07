import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayt")
export default class AytController {
  @operation({
    summary: "Get Ayt",
  })
  @get()
  static getAyt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayt",
  })
  @post("{id}")
  static createAyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
