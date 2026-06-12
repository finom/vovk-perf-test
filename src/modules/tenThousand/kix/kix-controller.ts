import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kix")
export default class KixController {
  @operation({
    summary: "Get Kix",
  })
  @get()
  static getKix = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kix",
  })
  @post("{id}")
  static createKix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
