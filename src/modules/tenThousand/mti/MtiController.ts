import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mti")
export default class MtiController {
  @operation({
    summary: "Get Mti",
  })
  @get()
  static getMti = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mti",
  })
  @post("{id}")
  static createMti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
