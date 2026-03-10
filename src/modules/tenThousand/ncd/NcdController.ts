import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncd")
export default class NcdController {
  @operation({
    summary: "Get Ncd",
  })
  @get()
  static getNcd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ncd",
  })
  @post("{id}")
  static createNcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
