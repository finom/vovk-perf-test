import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsr")
export default class LsrController {
  @operation({
    summary: "Get Lsr",
  })
  @get()
  static getLsr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsr",
  })
  @post("{id}")
  static createLsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
