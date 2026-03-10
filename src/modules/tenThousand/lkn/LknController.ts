import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkn")
export default class LknController {
  @operation({
    summary: "Get Lkn",
  })
  @get()
  static getLkn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkn",
  })
  @post("{id}")
  static createLkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
