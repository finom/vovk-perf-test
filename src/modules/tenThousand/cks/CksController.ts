import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cks")
export default class CksController {
  @operation({
    summary: "Get Cks",
  })
  @get()
  static getCks = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cks",
  })
  @post("{id}")
  static createCks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
