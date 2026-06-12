import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muk")
export default class MukController {
  @operation({
    summary: "Get Muk",
  })
  @get()
  static getMuk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Muk",
  })
  @post("{id}")
  static createMuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
