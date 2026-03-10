import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcv")
export default class FcvController {
  @operation({
    summary: "Get Fcv",
  })
  @get()
  static getFcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fcv",
  })
  @post("{id}")
  static createFcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
