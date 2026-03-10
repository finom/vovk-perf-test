import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fiz")
export default class FizController {
  @operation({
    summary: "Get Fiz",
  })
  @get()
  static getFiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fiz",
  })
  @post("{id}")
  static createFiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
