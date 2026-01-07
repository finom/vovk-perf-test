import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mda")
export default class MdaController {
  @operation({
    summary: "Get Mda",
  })
  @get()
  static getMda = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mda",
  })
  @post("{id}")
  static createMda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
