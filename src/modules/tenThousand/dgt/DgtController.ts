import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgt")
export default class DgtController {
  @operation({
    summary: "Get Dgt",
  })
  @get()
  static getDgt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dgt",
  })
  @post("{id}")
  static createDgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
