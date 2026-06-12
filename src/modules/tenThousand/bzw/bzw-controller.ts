import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzw")
export default class BzwController {
  @operation({
    summary: "Get Bzw",
  })
  @get()
  static getBzw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzw",
  })
  @post("{id}")
  static createBzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
