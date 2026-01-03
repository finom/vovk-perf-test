import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjms")
export default class GjmController {
  @operation({
    summary: "Get Gjms",
  })
  @get()
  static getGjms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjm",
  })
  @post("{id}")
  static createGjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
