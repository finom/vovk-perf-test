import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hngs")
export default class HngController {
  @operation({
    summary: "Get Hngs",
  })
  @get()
  static getHngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hng",
  })
  @post("{id}")
  static createHng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
