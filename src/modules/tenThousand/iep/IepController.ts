import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iep")
export default class IepController {
  @operation({
    summary: "Get Iep",
  })
  @get()
  static getIep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iep",
  })
  @post("{id}")
  static createIep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
