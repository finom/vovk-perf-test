import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjrs")
export default class GjrController {
  @operation({
    summary: "Get Gjrs",
  })
  @get()
  static getGjrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjr",
  })
  @post("{id}")
  static createGjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
