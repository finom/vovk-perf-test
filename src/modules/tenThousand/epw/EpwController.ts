import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epws")
export default class EpwController {
  @operation({
    summary: "Get Epws",
  })
  @get()
  static getEpws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epw",
  })
  @post("{id}")
  static createEpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
