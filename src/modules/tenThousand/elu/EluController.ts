import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elu")
export default class EluController {
  @operation({
    summary: "Get Elu",
  })
  @get()
  static getElu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elu",
  })
  @post("{id}")
  static createElu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
