import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyrs")
export default class IyrController {
  @operation({
    summary: "Get Iyrs",
  })
  @get()
  static getIyrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyr",
  })
  @post("{id}")
  static createIyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
