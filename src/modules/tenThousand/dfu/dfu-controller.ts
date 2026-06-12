import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfu")
export default class DfuController {
  @operation({
    summary: "Get Dfu",
  })
  @get()
  static getDfu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfu",
  })
  @post("{id}")
  static createDfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
