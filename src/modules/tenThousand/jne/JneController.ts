import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jne")
export default class JneController {
  @operation({
    summary: "Get Jne",
  })
  @get()
  static getJne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jne",
  })
  @post("{id}")
  static createJne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
