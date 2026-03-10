import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afn")
export default class AfnController {
  @operation({
    summary: "Get Afn",
  })
  @get()
  static getAfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afn",
  })
  @post("{id}")
  static createAfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
