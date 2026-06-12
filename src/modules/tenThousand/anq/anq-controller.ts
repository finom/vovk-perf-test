import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anq")
export default class AnqController {
  @operation({
    summary: "Get Anq",
  })
  @get()
  static getAnq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Anq",
  })
  @post("{id}")
  static createAnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
