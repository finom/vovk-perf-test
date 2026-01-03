import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzcs")
export default class KzcController {
  @operation({
    summary: "Get Kzcs",
  })
  @get()
  static getKzcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzc",
  })
  @post("{id}")
  static createKzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
