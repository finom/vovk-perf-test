import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mft")
export default class MftController {
  @operation({
    summary: "Get Mft",
  })
  @get()
  static getMft = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mft",
  })
  @post("{id}")
  static createMft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
