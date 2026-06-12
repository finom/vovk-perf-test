import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhe")
export default class NheController {
  @operation({
    summary: "Get Nhe",
  })
  @get()
  static getNhe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhe",
  })
  @post("{id}")
  static createNhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
