import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdq")
export default class FdqController {
  @operation({
    summary: "Get Fdq",
  })
  @get()
  static getFdq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdq",
  })
  @post("{id}")
  static createFdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
