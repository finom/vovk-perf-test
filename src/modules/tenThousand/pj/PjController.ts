import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pj")
export default class PjController {
  @operation({
    summary: "Get Pj",
  })
  @get()
  static getPj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Pj",
  })
  @post("{id}")
  static createPj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
