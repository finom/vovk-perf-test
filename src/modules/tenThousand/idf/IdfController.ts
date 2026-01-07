import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idf")
export default class IdfController {
  @operation({
    summary: "Get Idf",
  })
  @get()
  static getIdf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idf",
  })
  @post("{id}")
  static createIdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
