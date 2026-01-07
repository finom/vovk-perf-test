import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjf")
export default class GjfController {
  @operation({
    summary: "Get Gjf",
  })
  @get()
  static getGjf = procedure({
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
