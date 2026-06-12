import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvo")
export default class MvoController {
  @operation({
    summary: "Get Mvo",
  })
  @get()
  static getMvo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvo",
  })
  @post("{id}")
  static createMvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
