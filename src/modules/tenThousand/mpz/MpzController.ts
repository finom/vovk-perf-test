import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpz")
export default class MpzController {
  @operation({
    summary: "Get Mpz",
  })
  @get()
  static getMpz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mpz",
  })
  @post("{id}")
  static createMpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
