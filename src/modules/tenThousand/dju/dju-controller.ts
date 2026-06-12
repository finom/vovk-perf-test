import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dju")
export default class DjuController {
  @operation({
    summary: "Get Dju",
  })
  @get()
  static getDju = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dju",
  })
  @post("{id}")
  static createDju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
