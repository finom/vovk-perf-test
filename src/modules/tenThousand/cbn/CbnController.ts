import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbn")
export default class CbnController {
  @operation({
    summary: "Get Cbn",
  })
  @get()
  static getCbn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbn",
  })
  @post("{id}")
  static createCbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
