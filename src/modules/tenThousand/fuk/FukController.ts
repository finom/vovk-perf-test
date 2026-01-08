import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuk")
export default class FukController {
  @operation({
    summary: "Get Fuk",
  })
  @get()
  static getFuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuk",
  })
  @post("{id}")
  static createFuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
