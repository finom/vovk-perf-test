import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tcs")
export default class TcController {
  @operation({
    summary: "Get Tcs",
  })
  @get()
  static getTcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tc",
  })
  @post("{id}")
  static createTc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
