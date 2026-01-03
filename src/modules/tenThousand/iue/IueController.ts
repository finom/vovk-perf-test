import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iues")
export default class IueController {
  @operation({
    summary: "Get Iues",
  })
  @get()
  static getIues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iue",
  })
  @post("{id}")
  static createIue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
