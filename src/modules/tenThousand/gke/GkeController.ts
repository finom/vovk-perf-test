import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gke")
export default class GkeController {
  @operation({
    summary: "Get Gke",
  })
  @get()
  static getGke = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gke",
  })
  @post("{id}")
  static createGke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
