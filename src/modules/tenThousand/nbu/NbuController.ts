import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbu")
export default class NbuController {
  @operation({
    summary: "Get Nbu",
  })
  @get()
  static getNbu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbu",
  })
  @post("{id}")
  static createNbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
