import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vw")
export default class VwController {
  @operation({
    summary: "Get Vw",
  })
  @get()
  static getVw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vw",
  })
  @post("{id}")
  static createVw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
