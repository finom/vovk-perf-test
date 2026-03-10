import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmn")
export default class MmnController {
  @operation({
    summary: "Get Mmn",
  })
  @get()
  static getMmn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmn",
  })
  @post("{id}")
  static createMmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
