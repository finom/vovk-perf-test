import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjws")
export default class GjwController {
  @operation({
    summary: "Get Gjws",
  })
  @get()
  static getGjws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjw",
  })
  @post("{id}")
  static createGjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
