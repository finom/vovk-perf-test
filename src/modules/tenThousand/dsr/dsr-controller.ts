import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsr")
export default class DsrController {
  @operation({
    summary: "Get Dsr",
  })
  @get()
  static getDsr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsr",
  })
  @post("{id}")
  static createDsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
