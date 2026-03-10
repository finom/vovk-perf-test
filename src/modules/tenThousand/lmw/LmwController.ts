import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmw")
export default class LmwController {
  @operation({
    summary: "Get Lmw",
  })
  @get()
  static getLmw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lmw",
  })
  @post("{id}")
  static createLmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
