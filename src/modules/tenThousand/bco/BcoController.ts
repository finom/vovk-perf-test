import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bco")
export default class BcoController {
  @operation({
    summary: "Get Bco",
  })
  @get()
  static getBco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bco",
  })
  @post("{id}")
  static createBco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
