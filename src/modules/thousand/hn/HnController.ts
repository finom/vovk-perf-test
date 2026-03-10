import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hn")
export default class HnController {
  @operation({
    summary: "Get Hn",
  })
  @get()
  static getHn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hn",
  })
  @post("{id}")
  static createHn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
