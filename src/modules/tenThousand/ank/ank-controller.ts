import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ank")
export default class AnkController {
  @operation({
    summary: "Get Ank",
  })
  @get()
  static getAnk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ank",
  })
  @post("{id}")
  static createAnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
