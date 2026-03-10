import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fw")
export default class FwController {
  @operation({
    summary: "Get Fw",
  })
  @get()
  static getFw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fw",
  })
  @post("{id}")
  static createFw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
