import { procedure, prefix, get, post, operation } from "vovk";

@prefix("accs")
export default class AccController {
  @operation({
    summary: "Get Accs",
  })
  @get()
  static getAccs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acc",
  })
  @post("{id}")
  static createAcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
