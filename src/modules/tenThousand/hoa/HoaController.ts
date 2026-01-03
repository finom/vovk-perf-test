import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoas")
export default class HoaController {
  @operation({
    summary: "Get Hoas",
  })
  @get()
  static getHoas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoa",
  })
  @post("{id}")
  static createHoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
