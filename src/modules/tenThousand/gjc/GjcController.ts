import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjc")
export default class GjcController {
  @operation({
    summary: "Get Gjc",
  })
  @get()
  static getGjc = procedure({
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
