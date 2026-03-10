import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nei")
export default class NeiController {
  @operation({
    summary: "Get Nei",
  })
  @get()
  static getNei = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nei",
  })
  @post("{id}")
  static createNei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
