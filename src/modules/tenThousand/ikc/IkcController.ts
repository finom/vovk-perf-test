import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikc")
export default class IkcController {
  @operation({
    summary: "Get Ikc",
  })
  @get()
  static getIkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikc",
  })
  @post("{id}")
  static createIkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
