import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luk")
export default class LukController {
  @operation({
    summary: "Get Luk",
  })
  @get()
  static getLuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luk",
  })
  @post("{id}")
  static createLuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
