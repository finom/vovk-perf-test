import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmw")
export default class NmwController {
  @operation({
    summary: "Get Nmw",
  })
  @get()
  static getNmw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmw",
  })
  @post("{id}")
  static createNmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
