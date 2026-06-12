import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hti")
export default class HtiController {
  @operation({
    summary: "Get Hti",
  })
  @get()
  static getHti = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hti",
  })
  @post("{id}")
  static createHti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
