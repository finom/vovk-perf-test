import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cer")
export default class CerController {
  @operation({
    summary: "Get Cer",
  })
  @get()
  static getCer = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cer",
  })
  @post("{id}")
  static createCer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
