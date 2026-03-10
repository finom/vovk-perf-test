import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("baf")
export default class BafController {
  @operation({
    summary: "Get Baf",
  })
  @get()
  static getBaf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Baf",
  })
  @post("{id}")
  static createBaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
