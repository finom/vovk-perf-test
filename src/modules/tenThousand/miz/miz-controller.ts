import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("miz")
export default class MizController {
  @operation({
    summary: "Get Miz",
  })
  @get()
  static getMiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Miz",
  })
  @post("{id}")
  static createMiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
