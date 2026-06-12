import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhu")
export default class LhuController {
  @operation({
    summary: "Get Lhu",
  })
  @get()
  static getLhu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhu",
  })
  @post("{id}")
  static createLhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
