import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hme")
export default class HmeController {
  @operation({
    summary: "Get Hme",
  })
  @get()
  static getHme = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hme",
  })
  @post("{id}")
  static createHme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
