import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bto")
export default class BtoController {
  @operation({
    summary: "Get Bto",
  })
  @get()
  static getBto = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bto",
  })
  @post("{id}")
  static createBto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
