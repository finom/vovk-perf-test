import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bny")
export default class BnyController {
  @operation({
    summary: "Get Bny",
  })
  @get()
  static getBny = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bny",
  })
  @post("{id}")
  static createBny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
