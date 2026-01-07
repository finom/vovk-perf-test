import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqf")
export default class KqfController {
  @operation({
    summary: "Get Kqf",
  })
  @get()
  static getKqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqf",
  })
  @post("{id}")
  static createKqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
