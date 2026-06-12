import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ciz")
export default class CizController {
  @operation({
    summary: "Get Ciz",
  })
  @get()
  static getCiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ciz",
  })
  @post("{id}")
  static createCiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
