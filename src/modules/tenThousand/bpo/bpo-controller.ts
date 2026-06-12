import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpo")
export default class BpoController {
  @operation({
    summary: "Get Bpo",
  })
  @get()
  static getBpo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpo",
  })
  @post("{id}")
  static createBpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
