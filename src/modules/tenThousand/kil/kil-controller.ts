import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kil")
export default class KilController {
  @operation({
    summary: "Get Kil",
  })
  @get()
  static getKil = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kil",
  })
  @post("{id}")
  static createKil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
