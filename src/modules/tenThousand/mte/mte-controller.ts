import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mte")
export default class MteController {
  @operation({
    summary: "Get Mte",
  })
  @get()
  static getMte = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mte",
  })
  @post("{id}")
  static createMte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
