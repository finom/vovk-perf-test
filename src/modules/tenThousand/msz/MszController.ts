import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msz")
export default class MszController {
  @operation({
    summary: "Get Msz",
  })
  @get()
  static getMsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Msz",
  })
  @post("{id}")
  static createMsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
