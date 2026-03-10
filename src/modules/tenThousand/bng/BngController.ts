import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bng")
export default class BngController {
  @operation({
    summary: "Get Bng",
  })
  @get()
  static getBng = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bng",
  })
  @post("{id}")
  static createBng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
