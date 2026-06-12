import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsj")
export default class BsjController {
  @operation({
    summary: "Get Bsj",
  })
  @get()
  static getBsj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsj",
  })
  @post("{id}")
  static createBsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
