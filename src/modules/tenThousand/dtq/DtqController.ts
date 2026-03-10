import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtq")
export default class DtqController {
  @operation({
    summary: "Get Dtq",
  })
  @get()
  static getDtq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtq",
  })
  @post("{id}")
  static createDtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
