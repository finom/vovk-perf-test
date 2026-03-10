import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aha")
export default class AhaController {
  @operation({
    summary: "Get Aha",
  })
  @get()
  static getAha = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aha",
  })
  @post("{id}")
  static createAha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
