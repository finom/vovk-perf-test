import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nou")
export default class NouController {
  @operation({
    summary: "Get Nou",
  })
  @get()
  static getNou = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nou",
  })
  @post("{id}")
  static createNou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
