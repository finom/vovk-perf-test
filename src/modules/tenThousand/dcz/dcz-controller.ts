import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcz")
export default class DczController {
  @operation({
    summary: "Get Dcz",
  })
  @get()
  static getDcz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcz",
  })
  @post("{id}")
  static createDcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
