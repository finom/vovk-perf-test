import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuq")
export default class IuqController {
  @operation({
    summary: "Get Iuq",
  })
  @get()
  static getIuq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuq",
  })
  @post("{id}")
  static createIuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
