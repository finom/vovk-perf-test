import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kco")
export default class KcoController {
  @operation({
    summary: "Get Kco",
  })
  @get()
  static getKco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kco",
  })
  @post("{id}")
  static createKco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
