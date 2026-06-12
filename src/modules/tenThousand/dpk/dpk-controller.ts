import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpk")
export default class DpkController {
  @operation({
    summary: "Get Dpk",
  })
  @get()
  static getDpk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpk",
  })
  @post("{id}")
  static createDpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
