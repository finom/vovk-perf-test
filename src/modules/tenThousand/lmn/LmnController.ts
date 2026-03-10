import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmn")
export default class LmnController {
  @operation({
    summary: "Get Lmn",
  })
  @get()
  static getLmn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lmn",
  })
  @post("{id}")
  static createLmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
