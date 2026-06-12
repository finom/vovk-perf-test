import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcd")
export default class McdController {
  @operation({
    summary: "Get Mcd",
  })
  @get()
  static getMcd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcd",
  })
  @post("{id}")
  static createMcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
