import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afos")
export default class AfoController {
  @operation({
    summary: "Get Afos",
  })
  @get()
  static getAfos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afo",
  })
  @post("{id}")
  static createAfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
