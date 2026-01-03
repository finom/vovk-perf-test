import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eljs")
export default class EljController {
  @operation({
    summary: "Get Eljs",
  })
  @get()
  static getEljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elj",
  })
  @post("{id}")
  static createElj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
