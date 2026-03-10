import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cej")
export default class CejController {
  @operation({
    summary: "Get Cej",
  })
  @get()
  static getCej = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cej",
  })
  @post("{id}")
  static createCej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
