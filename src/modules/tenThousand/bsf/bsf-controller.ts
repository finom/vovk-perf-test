import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsf")
export default class BsfController {
  @operation({
    summary: "Get Bsf",
  })
  @get()
  static getBsf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsf",
  })
  @post("{id}")
  static createBsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
