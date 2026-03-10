import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iir")
export default class IirController {
  @operation({
    summary: "Get Iir",
  })
  @get()
  static getIir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iir",
  })
  @post("{id}")
  static createIir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
