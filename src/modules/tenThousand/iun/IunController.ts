import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuns")
export default class IunController {
  @operation({
    summary: "Get Iuns",
  })
  @get()
  static getIuns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iun",
  })
  @post("{id}")
  static createIun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
