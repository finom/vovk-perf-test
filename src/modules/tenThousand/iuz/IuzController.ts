import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuzs")
export default class IuzController {
  @operation({
    summary: "Get Iuzs",
  })
  @get()
  static getIuzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuz",
  })
  @post("{id}")
  static createIuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
