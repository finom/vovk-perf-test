import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klves")
export default class KlfController {
  @operation({
    summary: "Get Klves",
  })
  @get()
  static getKlves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klf",
  })
  @post("{id}")
  static createKlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
