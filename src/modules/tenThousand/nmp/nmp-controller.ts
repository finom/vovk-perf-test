import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmp")
export default class NmpController {
  @operation({
    summary: "Get Nmp",
  })
  @get()
  static getNmp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmp",
  })
  @post("{id}")
  static createNmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
