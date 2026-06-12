import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtg")
export default class DtgController {
  @operation({
    summary: "Get Dtg",
  })
  @get()
  static getDtg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtg",
  })
  @post("{id}")
  static createDtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
