import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtd")
export default class DtdController {
  @operation({
    summary: "Get Dtd",
  })
  @get()
  static getDtd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtd",
  })
  @post("{id}")
  static createDtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
