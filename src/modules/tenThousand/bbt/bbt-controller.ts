import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbt")
export default class BbtController {
  @operation({
    summary: "Get Bbt",
  })
  @get()
  static getBbt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bbt",
  })
  @post("{id}")
  static createBbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
