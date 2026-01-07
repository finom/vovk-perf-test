import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsk")
export default class HskController {
  @operation({
    summary: "Get Hsk",
  })
  @get()
  static getHsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsk",
  })
  @post("{id}")
  static createHsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
