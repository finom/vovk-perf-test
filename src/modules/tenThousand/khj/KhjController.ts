import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khjs")
export default class KhjController {
  @operation({
    summary: "Get Khjs",
  })
  @get()
  static getKhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khj",
  })
  @post("{id}")
  static createKhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
