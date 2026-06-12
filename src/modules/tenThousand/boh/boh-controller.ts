import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("boh")
export default class BohController {
  @operation({
    summary: "Get Boh",
  })
  @get()
  static getBoh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Boh",
  })
  @post("{id}")
  static createBoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
