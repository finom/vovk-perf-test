import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtm")
export default class DtmController {
  @operation({
    summary: "Get Dtm",
  })
  @get()
  static getDtm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtm",
  })
  @post("{id}")
  static createDtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
