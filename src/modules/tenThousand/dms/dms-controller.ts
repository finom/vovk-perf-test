import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dms")
export default class DmsController {
  @operation({
    summary: "Get Dms",
  })
  @get()
  static getDms = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dms",
  })
  @post("{id}")
  static createDms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
