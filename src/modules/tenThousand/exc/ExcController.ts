import { procedure, prefix, get, post, operation } from "vovk";

@prefix("excs")
export default class ExcController {
  @operation({
    summary: "Get Excs",
  })
  @get()
  static getExcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exc",
  })
  @post("{id}")
  static createExc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
