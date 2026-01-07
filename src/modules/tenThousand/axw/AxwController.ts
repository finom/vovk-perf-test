import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axw")
export default class AxwController {
  @operation({
    summary: "Get Axw",
  })
  @get()
  static getAxw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axw",
  })
  @post("{id}")
  static createAxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
