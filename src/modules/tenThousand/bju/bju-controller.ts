import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bju")
export default class BjuController {
  @operation({
    summary: "Get Bju",
  })
  @get()
  static getBju = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bju",
  })
  @post("{id}")
  static createBju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
