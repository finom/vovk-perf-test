import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nm")
export default class NmController {
  @operation({
    summary: "Get Nm",
  })
  @get()
  static getNm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nm",
  })
  @post("{id}")
  static createNm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
