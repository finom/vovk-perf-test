import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqa")
export default class AqaController {
  @operation({
    summary: "Get Aqa",
  })
  @get()
  static getAqa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aqa",
  })
  @post("{id}")
  static createAqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
