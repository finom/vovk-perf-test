import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbk")
export default class LbkController {
  @operation({
    summary: "Get Lbk",
  })
  @get()
  static getLbk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbk",
  })
  @post("{id}")
  static createLbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
