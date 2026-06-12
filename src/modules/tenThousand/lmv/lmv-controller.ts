import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmv")
export default class LmvController {
  @operation({
    summary: "Get Lmv",
  })
  @get()
  static getLmv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lmv",
  })
  @post("{id}")
  static createLmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
