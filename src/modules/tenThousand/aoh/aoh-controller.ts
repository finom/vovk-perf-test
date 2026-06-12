import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoh")
export default class AohController {
  @operation({
    summary: "Get Aoh",
  })
  @get()
  static getAoh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aoh",
  })
  @post("{id}")
  static createAoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
