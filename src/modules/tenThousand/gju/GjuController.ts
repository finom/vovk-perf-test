import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjus")
export default class GjuController {
  @operation({
    summary: "Get Gjus",
  })
  @get()
  static getGjus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gju",
  })
  @post("{id}")
  static createGju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
