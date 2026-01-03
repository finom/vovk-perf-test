import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjies")
export default class GjyController {
  @operation({
    summary: "Get Gjies",
  })
  @get()
  static getGjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjy",
  })
  @post("{id}")
  static createGjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
