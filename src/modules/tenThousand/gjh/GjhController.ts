import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjh")
export default class GjhController {
  @operation({
    summary: "Get Gjh",
  })
  @get()
  static getGjh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjh",
  })
  @post("{id}")
  static createGjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
