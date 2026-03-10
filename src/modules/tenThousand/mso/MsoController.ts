import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mso")
export default class MsoController {
  @operation({
    summary: "Get Mso",
  })
  @get()
  static getMso = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mso",
  })
  @post("{id}")
  static createMso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
