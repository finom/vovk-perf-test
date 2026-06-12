import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ait")
export default class AitController {
  @operation({
    summary: "Get Ait",
  })
  @get()
  static getAit = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ait",
  })
  @post("{id}")
  static createAit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
