import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlj")
export default class MljController {
  @operation({
    summary: "Get Mlj",
  })
  @get()
  static getMlj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mlj",
  })
  @post("{id}")
  static createMlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
