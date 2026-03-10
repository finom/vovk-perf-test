import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itq")
export default class ItqController {
  @operation({
    summary: "Get Itq",
  })
  @get()
  static getItq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itq",
  })
  @post("{id}")
  static createItq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
