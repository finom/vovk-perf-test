import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccv")
export default class CcvController {
  @operation({
    summary: "Get Ccv",
  })
  @get()
  static getCcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ccv",
  })
  @post("{id}")
  static createCcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
