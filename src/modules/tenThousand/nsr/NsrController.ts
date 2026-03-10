import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsr")
export default class NsrController {
  @operation({
    summary: "Get Nsr",
  })
  @get()
  static getNsr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsr",
  })
  @post("{id}")
  static createNsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
