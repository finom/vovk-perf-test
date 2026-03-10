import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcy")
export default class KcyController {
  @operation({
    summary: "Get Kcy",
  })
  @get()
  static getKcy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kcy",
  })
  @post("{id}")
  static createKcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
