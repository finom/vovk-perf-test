import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqe")
export default class IqeController {
  @operation({
    summary: "Get Iqe",
  })
  @get()
  static getIqe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqe",
  })
  @post("{id}")
  static createIqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
