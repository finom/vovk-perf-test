import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjcs")
export default class GjcController {
  @operation({
    summary: "Get Gjcs",
  })
  @get()
  static getGjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjc",
  })
  @post("{id}")
  static createGjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
