import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwe")
export default class KweController {
  @operation({
    summary: "Get Kwe",
  })
  @get()
  static getKwe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kwe",
  })
  @post("{id}")
  static createKwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
