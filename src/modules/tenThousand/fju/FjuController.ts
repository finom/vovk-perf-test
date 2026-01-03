import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjus")
export default class FjuController {
  @operation({
    summary: "Get Fjus",
  })
  @get()
  static getFjus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fju",
  })
  @post("{id}")
  static createFju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
