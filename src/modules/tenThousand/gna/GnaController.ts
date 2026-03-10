import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gna")
export default class GnaController {
  @operation({
    summary: "Get Gna",
  })
  @get()
  static getGna = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gna",
  })
  @post("{id}")
  static createGna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
