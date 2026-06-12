import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bos")
export default class BosController {
  @operation({
    summary: "Get Bos",
  })
  @get()
  static getBos = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bos",
  })
  @post("{id}")
  static createBos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
