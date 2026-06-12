import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coq")
export default class CoqController {
  @operation({
    summary: "Get Coq",
  })
  @get()
  static getCoq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Coq",
  })
  @post("{id}")
  static createCoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
