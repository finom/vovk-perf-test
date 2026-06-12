import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eiz")
export default class EizController {
  @operation({
    summary: "Get Eiz",
  })
  @get()
  static getEiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eiz",
  })
  @post("{id}")
  static createEiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
