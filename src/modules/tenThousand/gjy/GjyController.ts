import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjy")
export default class GjyController {
  @operation({
    summary: "Get Gjy",
  })
  @get()
  static getGjy = procedure({
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
