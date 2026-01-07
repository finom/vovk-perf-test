import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvu")
export default class KvuController {
  @operation({
    summary: "Get Kvu",
  })
  @get()
  static getKvu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvu",
  })
  @post("{id}")
  static createKvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
