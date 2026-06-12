import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bby")
export default class BbyController {
  @operation({
    summary: "Get Bby",
  })
  @get()
  static getBby = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bby",
  })
  @post("{id}")
  static createBby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
