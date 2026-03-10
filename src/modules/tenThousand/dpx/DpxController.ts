import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpx")
export default class DpxController {
  @operation({
    summary: "Get Dpx",
  })
  @get()
  static getDpx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpx",
  })
  @post("{id}")
  static createDpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
