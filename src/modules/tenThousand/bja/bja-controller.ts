import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bja")
export default class BjaController {
  @operation({
    summary: "Get Bja",
  })
  @get()
  static getBja = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bja",
  })
  @post("{id}")
  static createBja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
