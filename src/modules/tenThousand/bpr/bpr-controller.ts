import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpr")
export default class BprController {
  @operation({
    summary: "Get Bpr",
  })
  @get()
  static getBpr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpr",
  })
  @post("{id}")
  static createBpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
