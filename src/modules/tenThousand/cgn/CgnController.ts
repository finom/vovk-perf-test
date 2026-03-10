import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgn")
export default class CgnController {
  @operation({
    summary: "Get Cgn",
  })
  @get()
  static getCgn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cgn",
  })
  @post("{id}")
  static createCgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
