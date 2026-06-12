import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckt")
export default class CktController {
  @operation({
    summary: "Get Ckt",
  })
  @get()
  static getCkt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckt",
  })
  @post("{id}")
  static createCkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
