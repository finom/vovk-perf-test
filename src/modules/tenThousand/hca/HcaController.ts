import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hca")
export default class HcaController {
  @operation({
    summary: "Get Hca",
  })
  @get()
  static getHca = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hca",
  })
  @post("{id}")
  static createHca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
