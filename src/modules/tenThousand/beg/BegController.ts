import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("beg")
export default class BegController {
  @operation({
    summary: "Get Beg",
  })
  @get()
  static getBeg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Beg",
  })
  @post("{id}")
  static createBeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
