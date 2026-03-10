import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anu")
export default class AnuController {
  @operation({
    summary: "Get Anu",
  })
  @get()
  static getAnu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Anu",
  })
  @post("{id}")
  static createAnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
