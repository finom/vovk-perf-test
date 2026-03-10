import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkj")
export default class LkjController {
  @operation({
    summary: "Get Lkj",
  })
  @get()
  static getLkj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkj",
  })
  @post("{id}")
  static createLkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
