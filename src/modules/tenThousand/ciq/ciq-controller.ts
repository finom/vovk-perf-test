import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ciq")
export default class CiqController {
  @operation({
    summary: "Get Ciq",
  })
  @get()
  static getCiq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ciq",
  })
  @post("{id}")
  static createCiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
