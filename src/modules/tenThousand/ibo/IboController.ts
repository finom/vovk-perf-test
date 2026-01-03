import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibos")
export default class IboController {
  @operation({
    summary: "Get Ibos",
  })
  @get()
  static getIbos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibo",
  })
  @post("{id}")
  static createIbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
