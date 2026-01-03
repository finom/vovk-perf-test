import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjfs")
export default class GjfController {
  @operation({
    summary: "Get Gjfs",
  })
  @get()
  static getGjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjf",
  })
  @post("{id}")
  static createGjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
