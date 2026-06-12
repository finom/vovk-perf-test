import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbq")
export default class LbqController {
  @operation({
    summary: "Get Lbq",
  })
  @get()
  static getLbq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbq",
  })
  @post("{id}")
  static createLbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
