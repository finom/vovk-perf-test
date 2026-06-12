import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msm")
export default class MsmController {
  @operation({
    summary: "Get Msm",
  })
  @get()
  static getMsm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Msm",
  })
  @post("{id}")
  static createMsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
