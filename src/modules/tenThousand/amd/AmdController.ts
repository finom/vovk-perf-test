import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amds")
export default class AmdController {
  @operation({
    summary: "Get Amds",
  })
  @get()
  static getAmds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amd",
  })
  @post("{id}")
  static createAmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
